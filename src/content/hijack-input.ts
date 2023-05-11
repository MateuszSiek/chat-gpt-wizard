import { Prompt } from "../utils/prompts";
import {
  getActivePrompts,
  getPrompts,
  getSelectedPrompt,
  localStorage,
  setSelectedPrompt,
} from "../utils/local-storage";
import { getChatMessages, getTextarea } from "./selectors";
import { removeSelectUI } from "./ui-manipulation";
import { handleKeyboardPromptChange, PROMPT_WRAPPER_TEXT } from "./util";

let inputRef: HTMLTextAreaElement;
let buttonRef: HTMLButtonElement;

let selectedPrompt: Prompt | undefined;

getSelectedPrompt().then((prompt) => {
  selectedPrompt = prompt;
});

localStorage.changeStream.subscribe(({ selectedPromptId }) => {
  if (selectedPromptId) {
    getSelectedPrompt().then((prompt) => {
      selectedPrompt = prompt;
    });
  }
});

function onSubmit() {
  const textArea: HTMLTextAreaElement | null = getTextarea();
  const chatMessages = getChatMessages();
  removeSelectUI();
  if (!textArea || !selectedPrompt || chatMessages.length > 0) {
    return;
  }
  const currentText = textArea.value;
  const promptText = selectedPrompt.prompt;
  textArea.value = promptText
    ? `${PROMPT_WRAPPER_TEXT}[ignore:${selectedPrompt.id}]\n${promptText}${PROMPT_WRAPPER_TEXT}${currentText}`
    : currentText;
}

function HijackKeyboardEvents(input: HTMLTextAreaElement) {
  if (inputRef === input) return;
  function eventListener(event: KeyboardEvent) {
    if (event.key === "Enter" && !event.shiftKey) {
      onSubmit();
    }
    handleKeyboardPromptChange(event);
  }

  input.addEventListener("keydown", eventListener, true);
  inputRef = input;
}

function HijackButtonEvents(button: HTMLButtonElement) {
  if (buttonRef === button) return;
  function eventListener(event: MouseEvent) {
    onSubmit();
  }

  button.addEventListener("click", eventListener, true);
  buttonRef = button;
}

export { HijackButtonEvents, HijackKeyboardEvents };
