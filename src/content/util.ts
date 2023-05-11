import { getActivePrompts, setSelectedPrompt } from "../utils/local-storage";
import css from "./index.css";

export const PROMPT_WRAPPER_TEXT = "‏‏‎ ‎";

export function createShadowRoot() {
  const shadowRootDiv = document.createElement("div");
  const shadowRoot = shadowRootDiv.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = css;
  shadowRoot.append(style);
  return shadowRootDiv;
}

export function replaceTextBetweenWords(
  inputString: string,
  firstWord: string,
  secondWord: string,
  replacement: string
) {
  const regex = new RegExp(firstWord + ".*?" + secondWord, "gs");
  return inputString.replace(regex, replacement);
}

export function getCurrentChatId(): string | undefined {
  const url = window.location.pathname;
  const regex = /chat\/([a-zA-Z0-9-_]+)(\/|$)/;
  const match = url.match(regex);

  if (match && match[1]) {
    return match[1];
  }
}

export function handleKeyboardPromptChange(event: KeyboardEvent) {
  // select prompt, when ctrl + number is pressed
  // when ctrl + 0 is pressed, unselect the prompt
  if (event.ctrlKey || event.metaKey) {
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
}
