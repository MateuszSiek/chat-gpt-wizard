import {
  createShadowRoot,
  PROMPT_WRAPPER_TEXT,
  replaceTextBetweenWords,
} from "./util";
import { getPrompt } from "../utils/local-storage";
import {
  DESCRIPTION_CLASS,
  getInfoUi,
  getShadowRoot,
  getTextarea,
  getUi,
  MESSAGE_SELECTOR,
  SHADOW_ROOT_CLASS,
  UI_SELECTOR_CLASS,
} from "./selectors";
import { html, render } from "htm/preact";
import PromptsDropdown from "./PromptsDropdown";
import { Prompt } from "../utils/prompts";

const findPromptId = (text: string) => {
  const regex = /\[ignore:(.*?)\]/;
  const match = text.match(regex);
  return match && match[1];
};

export const hideNodePrompt = (node: any) => {
  const isInitPrompt = node?.innerHTML?.includes(PROMPT_WRAPPER_TEXT);
  const promptId = findPromptId(node?.innerHTML);

  if (!node.dataset.chatGptWizard && isInitPrompt && promptId) {
    node.dataset.chatGptWizard = "true";
    node.innerHTML = replaceTextBetweenWords(
      node.innerHTML,
      PROMPT_WRAPPER_TEXT,
      PROMPT_WRAPPER_TEXT,
      ""
    );
    getPrompt(promptId).then((prompt) => {
      updateInfoUI({ prompt });
    });
  }
};

export const hideUiPrompts = (parent: HTMLElement) => {
  parent.querySelectorAll(MESSAGE_SELECTOR).forEach((node: any) => {
    hideNodePrompt(node);
  });
};

// UI for selecting prompt
// Rendered only when user types first message
export function updateSelectUI() {
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

  render(html`<${PromptsDropdown} onChange=${setTextPlaceholder} />`, ui);
}

export function setTextPlaceholder(prompt?: Prompt): void {
  const textArea: HTMLTextAreaElement | null = getTextarea();
  if (!textArea) return;
  textArea!.placeholder = prompt?.placeholder || "Send a message...";
}

// UI for displaying info about used prompt
// Rendered when there is already chat history
export function updateInfoUI({ prompt }: { prompt?: Prompt } = {}) {
  removeInfoUI();
  const textarea = getTextarea();

  if (textarea && prompt) {
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

    description.innerText = "ChatGptWizard prompt: " + prompt.name;
    setTextPlaceholder(prompt);
  }
}

export function removeSelectUI() {
  const ui = getUi();
  ui && ui.remove();
}

export function removeInfoUI() {
  const ui = getInfoUi();
  ui && ui.remove();
}
