import { HijackButtonEvents, HijackKeyboardEvents } from "./hijack-input";
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

function hijackEvents() {
  const button = getButton();
  const textarea = getTextarea();
  if (!button || !textarea) return;

  HijackButtonEvents(button); // hijack button click event
  HijackKeyboardEvents(textarea); // hijack keyboard "Enter" event
}

export function updateUI() {
  const subtmitButton = getButton();
  const inputTextarea = getTextarea();
  const chatMessages = getChatMessages();

  hideUiPrompts(getRootElement());

  // If there are chat messages, remove the UI for prompt selection
  // the select UI is only available for the first message
  if (chatMessages.length > 0) {
    removeSelectUI();
    return;
  }

  hijackEvents();

  if (subtmitButton && inputTextarea) {
    removeInfoUI();
    updateSelectUI();
  }
}

// Initial call to update/create the UI
updateUI();
const rootEl = getRootElement();
try {
  const observer = new MutationObserver((mutationsList) => {
    // Update UI with each mutation
    updateUI();

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

  // Start observing the root element with configuration
  // This observer is quite aggressive - it observes a lot of elements to ensure that the custom extension
  // UI isn't removed or doesn't malfunction due to updates on the chatGPT website.
  observer.observe(rootEl, { childList: true, subtree: true });
} catch (e: any) {
  console.info("ChatGptWizard error --> Could not update UI:\n", e.stack);
}

window.addEventListener("hashchange", updateUI);

export {};
