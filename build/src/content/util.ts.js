import __vite__css from './index.css.js';

const PROMPT_WRAPPER_TEXT = "\u200F\u200F\u200E \u200E";
function createShadowRoot() {
  const shadowRootDiv = document.createElement("div");
  const shadowRoot = shadowRootDiv.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = __vite__css;
  shadowRoot.append(style);
  return shadowRootDiv;
}
function replaceTextBetweenWords(inputString, firstWord, secondWord, replacement) {
  const regex = new RegExp(firstWord + ".*?" + secondWord, "gs");
  return inputString.replace(regex, replacement);
}
function getCurrentChatId() {
  const url = window.location.pathname;
  const regex = /chat\/([a-zA-Z0-9-_]+)(\/|$)/;
  const match = url.match(regex);
  if (match && match[1]) {
    return match[1];
  }
}

export { PROMPT_WRAPPER_TEXT, createShadowRoot, getCurrentChatId, replaceTextBetweenWords };
