export const BUTTON_SELECTOR = 'form textarea+button';
export const TEXTAREA_SELECTOR = 'form textarea';
export const UI_SELECTOR = '.chat-gpt-wizard';
export const MESSAGE_SELECTOR = `.items-start:not(.scrollbar-trigger)`

export function getRootElement(): HTMLDivElement {
    return document.querySelector('div[id="__next"]')!;
}

export function getUi(): HTMLButtonElement | null {
    const rootEl = getRootElement();
    return rootEl.querySelector(UI_SELECTOR);
}

export function getButton(): HTMLButtonElement | null {
    const rootEl = getRootElement();
    return rootEl.querySelector(BUTTON_SELECTOR);
}

export function getTextarea(): HTMLTextAreaElement | null {
    const rootEl = getRootElement();
    return rootEl.querySelector(TEXTAREA_SELECTOR);
}