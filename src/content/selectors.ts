export const BUTTON_SELECTOR = "form textarea+button";
export const TEXTAREA_SELECTOR = "form textarea";
export const MESSAGE_SELECTOR = `.items-start:not(.scrollbar-trigger)`;
export const MESSAGE_GROUP_SELECTOR = `main div.group`;

export const UI_SELECTOR_CLASS = "chat-gpt-wizard";
export const SHADOW_ROOT_CLASS = "chat-gpt-wizard--shadow-root";
export const DESCRIPTION_CLASS = "chat-gpt-wizard--description";

export function getRootElement(): HTMLDivElement {
  return document.querySelector('div[id="__next"]')!;
}

export function getShadowRoot(): HTMLButtonElement | null {
  const rootEl = getRootElement();
  return rootEl.querySelector("." + SHADOW_ROOT_CLASS);
}

export function getUi(): HTMLButtonElement | null {
  const rootEl = getRootElement();
  return rootEl.querySelector("." + UI_SELECTOR_CLASS);
}

export function getDescriptionUi(): HTMLButtonElement | null {
  const rootEl = getRootElement();
  return rootEl.querySelector("." + DESCRIPTION_CLASS);
}

export function getButton(): HTMLButtonElement | null {
  const rootEl = getRootElement();
  return rootEl.querySelector(BUTTON_SELECTOR);
}

export function getTextarea(): HTMLTextAreaElement | null {
  const rootEl = getRootElement();
  return rootEl.querySelector(TEXTAREA_SELECTOR);
}

export function getChatMessages(): HTMLDivElement[] {
  const rootEl = getRootElement();
  return [...rootEl.querySelectorAll<HTMLDivElement>(MESSAGE_GROUP_SELECTOR)];
}
