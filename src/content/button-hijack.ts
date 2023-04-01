import {getTextarea} from "./selectors";
import {PROMPT_WRAPPER_TEXT} from "./util";

function updateTextArea(prompt: () => string | undefined) {
    const textArea: HTMLTextAreaElement | null = getTextarea();
    if (!textArea) {
        return;
    }
    const currentText = textArea.value;
    const promptText = prompt();
    console.log("PROMPT!!!!", promptText);
    textArea.value = promptText ? PROMPT_WRAPPER_TEXT + promptText + PROMPT_WRAPPER_TEXT + currentText : currentText;
}

function HijackKeyboardEvents(input: HTMLTextAreaElement, prompt: () => string | undefined) {
    const originalKeydown = input.onkeydown;

    function wrappedKeydown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            console.log('Code to execute before the original keydown event');
            updateTextArea(prompt);
        }
        if (originalKeydown) {
            originalKeydown.call(input, event);
        }
    }

    input.onkeydown = wrappedKeydown;
    input.dataset.chatGptWizard = "true";

    console.log("Textarea hijacked", input);
}

function HijackButton(button: HTMLButtonElement, prompt: () => string | undefined) {
    const originalOnClick = button.onclick;

    function wrappedOnClick(event: MouseEvent) {
        console.log('Code to execute before the original onclick event');
        updateTextArea(prompt);
        if (originalOnClick) {
            originalOnClick.call(button, event);
        }
    }

    button.onclick = wrappedOnClick;
    button.dataset.chatGptWizard = "true";

    console.log("Button hijacked", button);
}

export {HijackButton, HijackKeyboardEvents};