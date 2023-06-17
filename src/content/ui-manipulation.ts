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

// Find prompt id from given text
// This fuction is used to extract prompt id from chat history
const findPromptId = (text: string) => {
  const promptIdRegex = /\[ignore:(.*?)\]/;
  const match = text.match(promptIdRegex);

  return match ? match[1] : null;
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

// Hide prompts in UI
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
  const textareaParentParent: HTMLElement =
    textarea.parentElement!.parentElement!;

  if (!getShadowRoot()) {
    const shadowRootDiv = createShadowRoot();
    shadowRootDiv.classList.add(SHADOW_ROOT_CLASS);
    textareaParentParent.appendChild(shadowRootDiv);
  }

  let uiDiv = document.createElement("div");
  uiDiv.classList.add(UI_SELECTOR_CLASS);
  const form = document.querySelector("form");
  form!.parentElement!.insertBefore(uiDiv, form!.parentElement!.firstChild);

  render(html`<${PromptsDropdown} onChange=${setTextPlaceholder} />`, uiDiv);
}

export function setTextPlaceholder(prompt?: Prompt): void {
  const textArea: HTMLTextAreaElement | null = getTextarea();
  if (!textArea) return;
  textArea.placeholder = prompt?.placeholder || "Send a message...";
}

// UI for displaying info about used prompt
// Rendered when there is already chat history
export function updateInfoUI({ prompt }: { prompt?: Prompt } = {}) {
  removeInfoUI();
  const textarea = getTextarea();

  if (!textarea || !prompt) return;

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

export function removeSelectUI() {
  const ui = getUi();
  if (ui) ui.remove();
}

export function removeInfoUI() {
  const infoUi = getInfoUi();
  if (infoUi) infoUi.remove();
}
