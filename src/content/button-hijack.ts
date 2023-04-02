import {getTextarea} from "./selectors";
import {PROMPT_WRAPPER_TEXT} from "./util";

function HijackKeyboardEvents(input: HTMLTextAreaElement, onSubmit: () => void) {
    const originalKeydown = input.onkeydown;

    function wrappedKeydown(event: KeyboardEvent) {
        if (event.key === "Enter" && !event.shiftKey) {
            onSubmit();
        }
        if (originalKeydown) {
            originalKeydown.call(input, event);
        }
    }

    input.onkeydown = wrappedKeydown;
    input.dataset.chatGptWizard = "true";

    console.log("Textarea hijacked", input);
}

function HijackButton(button: HTMLButtonElement, onSubmit: () => void) {
    const originalOnClick = button.onclick;

    function wrappedOnClick(event: MouseEvent) {
        onSubmit();
        if (originalOnClick) {
            originalOnClick.call(button, event);
        }
    }

    button.onclick = wrappedOnClick;
    button.dataset.chatGptWizard = "true";

    console.log("Button hijacked", button);
}

export {HijackButton, HijackKeyboardEvents};