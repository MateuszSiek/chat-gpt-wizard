import { HijackButton, HijackKeyboardEvents } from './button-hijack.ts.js';
import { localStorage } from '../utils/local-storage.ts.js';

console.info("chrome-ext template-react-ts content script1234");
localStorage.changeStream.subscribe((change) => {
  console.log("localStorage.changeStream", change);
});
localStorage.valueStream.subscribe((values) => {
  console.log("Everything in this bucket", values);
});
const handleButtonChange = (element) => {
  if (!element.dataset.chatGptWizard) {
    console.log("Element changed:", element);
    HijackButton(element);
  }
  const textArea = document.querySelector("form textarea");
  if (!textArea.dataset.chatGptWizard) {
    console.log("textArea Element changed:", textArea);
    HijackKeyboardEvents(textArea);
  }
};
function replaceTextBetweenWords(inputString, firstWord, secondWord, replacement) {
  const regex = new RegExp(firstWord + ".*?" + secondWord, "g");
  return inputString.replace(regex, replacement);
}
const selectorsAndHandlers = {
  "form textarea+button": handleButtonChange,
  ":not(button)": function handleElementChange2(element) {
    const updateTextNode = (node) => {
      const isInitPrompt = node?.innerHTML?.includes("\u200F\u200F\u200E \u200E");
      if (!node.dataset.chatGptWizard && isInitPrompt) {
        console.log("Element changed (Selector 2):", node);
        node.dataset.chatGptWizard = "true";
        node.innerHTML = replaceTextBetweenWords(node.innerHTML, "\u200F\u200F\u200E \u200E", "\u200F\u200F\u200E \u200E", "");
      }
    };
    if (element.matches(".items-start")) {
      updateTextNode(element);
    } else {
      element.querySelectorAll(".items-start").forEach((node) => {
        updateTextNode(node);
      });
    }
  }
};
function handleElementChange(element) {
  for (const selector in selectorsAndHandlers) {
    if (element.matches(selector)) {
      selectorsAndHandlers[selector](element);
    }
  }
}
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      const addedNodes = Array.from(mutation.addedNodes);
      const removedNodes = Array.from(mutation.removedNodes);
      const targetNodes = addedNodes.concat(removedNodes);
      console.log("addedNodes", addedNodes);
      targetNodes.forEach((node) => {
        if (node.matches) {
          handleElementChange(node);
        }
      });
    }
    if (mutation.type === "attributes") {
      handleElementChange(mutation.target);
    }
  }
});
const config = { childList: true, subtree: true, attributes: true };
observer.observe(document, config);
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, sender);
});
