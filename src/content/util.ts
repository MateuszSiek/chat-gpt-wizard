import { getActivePrompts, setSelectedPrompt } from "../utils/local-storage";
import css from "./index.css";

// Constant used to denote prompts
export const PROMPT_WRAPPER_TEXT = "‏‏‎ ‎";

const CHAT_ID_REGEX = /chat\/([a-zA-Z0-9-_]+)(\/|$)/;

/**
 * Creates a shadow DOM root and applies CSS styles to it.
 */
export function createShadowRoot() {
  const shadowRootDiv = document.createElement("div");
  const shadowRoot = shadowRootDiv.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = css;
  shadowRoot.append(style);
  return shadowRootDiv;
}

/**
 * Replaces a substring between two specific words with another substring.
 */
export function replaceTextBetweenWords(
  inputString: string,
  firstWord: string,
  secondWord: string,
  replacement: string
) {
  const regex = new RegExp(`${firstWord}.*?${secondWord}`, "gs");
  return inputString.replace(regex, replacement);
}

/**
 * Extracts the current chat ID from the window URL.
 */
export function getCurrentChatId(): string | undefined {
  const match = window.location.pathname.match(CHAT_ID_REGEX);

  return match ? match[1] : undefined;
}

/**
 * Handles changes in keyboard prompt.
 * When Ctrl/Cmd + number (0-9) is pressed, the corresponding prompt is selected/deselected.
 * @param {KeyboardEvent} event
 */
export function handleKeyboardPromptChange(event: KeyboardEvent) {
  // select prompt, when ctrl + number is pressed
  // when ctrl + 0 is pressed, unselect the prompt
  if (!event.ctrlKey && !event.metaKey) return;

  const number = parseInt(event.key);

  if (number >= 0 && number <= 9) {
    event.preventDefault();
    event.stopPropagation();

    if (number === 0) {
      setSelectedPrompt();
      return;
    }

    getActivePrompts().then((prompts) => {
      const prompt = prompts[number - 1];
      setSelectedPrompt(prompt?.id);
    });
  }
}
