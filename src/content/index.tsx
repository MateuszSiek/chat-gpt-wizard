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

export function updateUI() {
  const button = getButton();
  const textarea = getTextarea();
  const chatMessages = getChatMessages();

  hideUiPrompts(getRootElement());

  if (chatMessages.length > 0) {
    removeSelectUI();
    return;
  }

  hijackEvents();

  if (button && textarea) {
    removeInfoUI();
    updateSelectUI();
  }
}

updateUI();
const rootEl = getRootElement();
const form = document.querySelector("form");
console.log("form", form);
try {
  new MutationObserver((mutationsList) => {
    console.log("MutationObserver1");
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
  }).observe(rootEl, { childList: true, subtree: true });
} catch (e: any) {
  console.info("ChatGptWizard error --> Could not update UI:\n", e.stack);
}

window.addEventListener("hashchange", function (event) {
  console.log("MutationObserver3");
  updateUI();
});

// const observer = new MutationObserver((mutationsList) => {
//   for (const mutation of mutationsList) {
//     if (mutation.type === "childList") {
//       const addedNodes = Array.from(mutation.addedNodes);
//
//       addedNodes.forEach((node: any) => {
//         if (node.matches && node.matches(MESSAGE_GROUP_SELECTOR)) {
//           hideUiPrompts(node);
//         }
//         if (node.matches && node.matches(MESSAGE_SELECTOR)) {
//           hideNodePrompt(node);
//         }
//       });
//     }
//   }
// });
//
// observer.observe(document, { childList: true, subtree: true });

export {};
