import { HijackButtonEvents, HijackKeyboardEvents } from "./button-hijack";
import {
  getActivePrompts,
  getPromptFromHistory,
  getSelectedPrompt,
  localStorage,
  setSelectedPrompt,
  updateHistory,
} from "../utils/local-storage";
import Browser from "webextension-polyfill";
import { render, html } from "htm/preact";
import { useState, useEffect } from "preact/hooks";
import {
  DESCRIPTION_CLASS,
  getButton,
  getChatMessages,
  getDescriptionUi,
  getRootElement,
  getShadowRoot,
  getTextarea,
  getUi,
  MESSAGE_GROUP_SELECTOR,
  MESSAGE_SELECTOR,
  SHADOW_ROOT_CLASS,
  UI_SELECTOR_CLASS,
} from "./selectors";
import {
  createShadowRoot,
  getCurrentChatId,
  PROMPT_WRAPPER_TEXT,
  replaceTextBetweenWords,
} from "./util";
import { Prompt } from "../utils/prompts";

console.info("ChatGPT Prompt Wizard loaded");

let selectedPrompt: Prompt | undefined = undefined;
let awaitingHistoryUpdate = false;
let currentChatId: string | undefined = undefined;

getSelectedPrompt().then((prompt) => {
  selectedPrompt = prompt;
});

Browser.runtime.onMessage.addListener(({ type, payload }) => {
  if (type === "chat-id" && awaitingHistoryUpdate && selectedPrompt) {
    awaitingHistoryUpdate = false;
    currentChatId = payload;
    updateHistory(payload, selectedPrompt?.id);
    updateInfoUI({ chatId: payload, prompt: selectedPrompt });
  }
});

function onSubmit() {
  const textArea: HTMLTextAreaElement | null = getTextarea();
  const chatMessages = getChatMessages();
  // console.log("onSubmit", selectedPrompt, textArea, chatMessages);
  removeSelectUI();
  if (!textArea || !selectedPrompt || chatMessages.length > 0) {
    return;
  }
  const currentText = textArea.value;
  const promptText = selectedPrompt.prompt;
  textArea.value = promptText
    ? PROMPT_WRAPPER_TEXT + promptText + PROMPT_WRAPPER_TEXT + currentText
    : currentText;
  awaitingHistoryUpdate = true;
}

const hijackEvents = () => {
  const button = getButton();
  const textarea = getTextarea();
  if (!button || !textarea) return;

  HijackButtonEvents(button, onSubmit);
  HijackKeyboardEvents(textarea, onSubmit);
};

const hideNodePrompt = (node: any) => {
  const isInitPrompt = node?.innerHTML?.includes(PROMPT_WRAPPER_TEXT);
  if (!node.dataset.chatGptWizard && isInitPrompt) {
    node.dataset.chatGptWizard = "true";
    node.innerHTML = replaceTextBetweenWords(
      node.innerHTML,
      PROMPT_WRAPPER_TEXT,
      PROMPT_WRAPPER_TEXT,
      ""
    );
  }
};

const hideUiPrompts = (parent: HTMLElement) => {
  parent.querySelectorAll(MESSAGE_SELECTOR).forEach((node: any) => {
    hideNodePrompt(node);
  });
};

const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      const addedNodes = Array.from(mutation.addedNodes);

      addedNodes.forEach((node: any) => {
        if (node.matches && node.matches(MESSAGE_GROUP_SELECTOR)) {
          hideUiPrompts(node);
        }
        if (node.matches && node.matches(MESSAGE_SELECTOR)) {
          hideNodePrompt(node);
        }
      });
    }
  }
});

observer.observe(document, { childList: true, subtree: true });

const PromptsDropdown = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>();
  useEffect(() => {
    Promise.all([getActivePrompts(), getSelectedPrompt()]).then(
      ([prompts, prompt]) => {
        setPrompts(prompts);
        setSelectedId(prompt && prompt.id);
      }
    );
  }, []);

  useEffect(() => {
    const sub = localStorage.changeStream.subscribe(({ prompts }) => {
      if (prompts?.newValue) {
        setPrompts(prompts.newValue);
      }
    });
    return () => sub.unsubscribe();
  }, []);

  const handleChange = (event: any) => {
    selectedPrompt = prompts.find(({ id }) => id === event.target.value);
    const selectedPromptId = selectedPrompt && selectedPrompt.id;
    selectedPromptId && setSelectedPrompt(selectedPromptId);
    setSelectedId(selectedPromptId);
    setTextPlaceholder(selectedPrompt);
  };

  const SELECT_CLASS =
    "chat-gpt-wizard--select cursor-default rounded-md border border-black/10 bg-white text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm";
  return html`
    <div class="chat-gpt-wizard--select-wrapper">
      <div
        class="chat-gpt-wizard--select-label text-xs text-gray-700 dark:text-gray-500"
      >
        Select prompt
      </div>
      <select
        onChange=${handleChange}
        class=${SELECT_CLASS}
        name="cars"
        id="cars"
      >
        <option value="" selected=${!selectedId && "selected"}></option>
        ${prompts.map(
          ({ name, id }: Prompt) => html` <option
            value="${id}"
            selected=${selectedId === id && "selected"}
          >
            ${name}
          </option>`
        )}
      </select>
      ${selectedPrompt?.instructions &&
      html`
        <div
          class="chat-gpt-wizard--select-instructions text-xs text-black/50 dark:text-white/50"
        >
          ${selectedPrompt?.instructions}
        </div>
      `}
    </div>
  `;
};

function renderCommands(container: any) {
  render(html` <${PromptsDropdown} />`, container);
}

// UI for selecting prompt
// Rendered only when user types first message
async function updateSelectUI() {
  if (getUi()) return;

  const textarea = getTextarea()!;
  const textareaParentParent: any = textarea.parentElement!.parentElement;

  if (!getShadowRoot()) {
    const shadowRootDiv = createShadowRoot();
    shadowRootDiv.classList.add(SHADOW_ROOT_CLASS);
    textareaParentParent.appendChild(shadowRootDiv);
  }

  let ui = document.createElement("div");
  ui.classList.add(UI_SELECTOR_CLASS);
  const form = document.querySelector("form");
  form!.parentElement!.insertBefore(ui, form!.parentElement!.firstChild);

  renderCommands(ui);
}

function setTextPlaceholder(prompt?: Prompt): void {
  const textArea: HTMLTextAreaElement | null = getTextarea();
  if (!textArea) return;
  textArea!.placeholder = prompt?.placeholder || "Send a message...";
}

// UI for displaying info about used prompt
// Rendered when there is already chat history
async function updateInfoUI({
  chatId,
  prompt,
}: { chatId?: string; prompt?: Prompt } = {}) {
  const textarea = getTextarea();
  const currentId = chatId || getCurrentChatId();
  const historyPrompt =
    prompt || (currentId && (await getPromptFromHistory(currentId)));

  if (textarea && historyPrompt) {
    const textareaParentParent: any = textarea!.parentElement!.parentElement;
    let description = document.createElement("div");

    description.classList.add(
      DESCRIPTION_CLASS,
      "text-center",
      "text-xs",
      "text-black/50",
      "dark:text-white/50"
    );

    textareaParentParent!.insertBefore(
      description,
      textareaParentParent!.lastElementChild.nextSibling
    );

    description.innerText = "ChatGptWizard prompt: " + historyPrompt.name;
    setTextPlaceholder(historyPrompt);
  }
}

function removeSelectUI() {
  const ui = getUi();
  ui && ui.remove();
}

function removeDescriptionUI() {
  const ui = getDescriptionUi();
  ui && ui.remove();
}

async function updateUI() {
  const button = getButton();
  const textarea = getTextarea();
  const chatMessages = getChatMessages();
  // console.log("updateUI");

  hideUiPrompts(getRootElement());

  if (chatMessages.length > 0) {
    removeSelectUI();
    await updateInfoUI();
    return;
  }

  hijackEvents();

  if (button && textarea) {
    removeDescriptionUI();
    await updateSelectUI();
  }
}

updateUI();

const rootEl = getRootElement();
const form = document.querySelector("form");

try {
  new MutationObserver(() => {
    updateUI();
  }).observe(rootEl, { childList: true });
  if (form) {
    new MutationObserver(() => {
      updateUI();
    }).observe(form, { childList: true, subtree: true });
  }
} catch (e: any) {
  console.info("ChatGptWizard error --> Could not update UI:\n", e.stack);
}

window.addEventListener("hashchange", function (event) {
  updateUI();
});

export {};
