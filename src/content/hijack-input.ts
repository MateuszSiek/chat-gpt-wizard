import { Prompt } from "../utils/prompts";
import { getSelectedPrompt, localStorage } from "../utils/local-storage";
import { getChatMessages, getTextarea } from "./selectors";
import { removeSelectUI } from "./ui-manipulation";
import { handleKeyboardPromptChange, PROMPT_WRAPPER_TEXT } from "./util";

// Store references to the chat input and button elements
let inputRef: HTMLTextAreaElement;
let buttonRef: HTMLButtonElement;

// Variable to hold the selected prompt
let selectedPrompt: Prompt | undefined;

// Fetch and store the initially selected prompt from localStorage
getSelectedPrompt().then((prompt) => {
  selectedPrompt = prompt;
});

// Watch for changes in the localStorage for selectedPromptId
localStorage.changeStream.subscribe(({ selectedPromptId }) => {
  // If selectedPromptId changes, fetch and store the new selected prompt
  if (selectedPromptId) {
    getSelectedPrompt().then((prompt) => {
      selectedPrompt = prompt;
    });
  }
});

/**
 * Handle chat form submission.
 * Inserts selected prompt into textarea value if possible
 * This function is called when 'Enter' is pressed or the button is clicked.
 */
export function onSubmit() {
  const textArea: HTMLTextAreaElement | null = getTextarea();
  const chatMessages = getChatMessages();

  // Once the form is submitted, we no longer need the select UI
  removeSelectUI();

  // If the textarea or the selected prompt doesn't exist, or if there are already chat messages, return early
  if (!textArea || !selectedPrompt || chatMessages.length > 0) {
    return;
  }

  // Get the current text in the text area and the selected prompt's text
  const currentText = textArea.value;
  const promptText = selectedPrompt.prompt;

  // If promptText exists, prepend it to the current text. Otherwise, leave the text as it is
  textArea.value = promptText
    ? `${PROMPT_WRAPPER_TEXT}[ignore:${selectedPrompt.id}]\n${promptText}${PROMPT_WRAPPER_TEXT}${currentText}`
    : currentText;
}

/**
 * This function hijacks the 'Enter' key on the input field to allow customization of the input before submission.
 * Calls onSubmit when 'Enter' is pressed (and not with Shift key, since shift+enter is used to create a new line).
 * @param {HTMLTextAreaElement} input
 */
function HijackKeyboardEvents(input: HTMLTextAreaElement) {
  // Avoid running the hijacking code multiple times on the same element
  if (inputRef === input) return;

  const handleKeydown = (event: KeyboardEvent) => {
    // Shift key is used to create a new line, so ignore it
    if (event.key === "Enter" && !event.shiftKey) {
      onSubmit();
    }

    // Handle the keyboard prompt change event
    handleKeyboardPromptChange(event);
  };

  // Add the event listener to the text area
  input.addEventListener("keydown", handleKeydown, true);

  // Update the reference to the text area
  inputRef = input;
}

/**
 * This function hijacks the button click event to allow customization of the input before submission.
 * Calls onSubmit on 'click'.
 * @param {HTMLButtonElement} button
 */
function HijackButtonEvents(button: HTMLButtonElement) {
  // Avoid running the hijacking code multiple times on the same element
  if (buttonRef === button) return;

  // Add the event listener to the button
  button.addEventListener("click", () => onSubmit(), true);

  // Update the reference to the button
  buttonRef = button;
}

export { HijackButtonEvents, HijackKeyboardEvents };
