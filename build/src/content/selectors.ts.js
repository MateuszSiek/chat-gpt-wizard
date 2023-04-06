const BUTTON_SELECTOR = "form textarea+button";
const TEXTAREA_SELECTOR = "form textarea";
const UI_SELECTOR = ".chat-gpt-wizard";
const MESSAGE_SELECTOR = `.items-start:not(.scrollbar-trigger)`;
const MESSAGE_GROUP_SELECTOR = `main div.group`;
const MODEL_TITLE_SELECTOR = "main .items-center>.items-center";
function getRootElement() {
  return document.querySelector('div[id="__next"]');
}
function getUi() {
  const rootEl = getRootElement();
  return rootEl.querySelector(UI_SELECTOR);
}
function getButton() {
  const rootEl = getRootElement();
  return rootEl.querySelector(BUTTON_SELECTOR);
}
function getTextarea() {
  const rootEl = getRootElement();
  return rootEl.querySelector(TEXTAREA_SELECTOR);
}
function getChatMessages() {
  const rootEl = getRootElement();
  return [...rootEl.querySelectorAll(MESSAGE_GROUP_SELECTOR)];
}
function getModelTitle() {
  const rootEl = getRootElement();
  return rootEl.querySelector(MODEL_TITLE_SELECTOR);
}

export { BUTTON_SELECTOR, MESSAGE_GROUP_SELECTOR, MESSAGE_SELECTOR, MODEL_TITLE_SELECTOR, TEXTAREA_SELECTOR, UI_SELECTOR, getButton, getChatMessages, getModelTitle, getRootElement, getTextarea, getUi };
