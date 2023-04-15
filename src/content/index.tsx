import { HijackButtonEvents, HijackKeyboardEvents } from "./button-hijack";
import {
  getButton,
  getChatMessages,
  getRootElement,
  getTextarea,
  MESSAGE_GROUP_SELECTOR,
  MESSAGE_SELECTOR,
} from "./selectors";
import {
  hideNodePrompt,
  hideUiPrompts,
  removeInfoUI,
  removeSelectUI,
  updateSelectUI,
} from "./ui-manipulation";

console.info("ChatGPT Prompt Wizard loaded");

const hijackEvents = () => {
  const button = getButton();
  const textarea = getTextarea();
  if (!button || !textarea) return;

  HijackButtonEvents(button);
  HijackKeyboardEvents(textarea);
};

export async function updateUI() {
  const button = getButton();
  const textarea = getTextarea();
  const chatMessages = getChatMessages();

  console.log("ChatGPT Prompt Wizard updateUI", {
    button,
    textarea,
    chatMessages,
  });
  hideUiPrompts(getRootElement());

  if (chatMessages.length > 0) {
    removeSelectUI();
    return;
  }

  hijackEvents();

  if (button && textarea) {
    removeInfoUI();
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

export {};
