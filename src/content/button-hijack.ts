function HijackKeyboardEvents(input: HTMLTextAreaElement, onSubmit: () => void) {
    function eventListener(event: KeyboardEvent) {
        if (event.key === "Enter" && !event.shiftKey) {
            onSubmit();
        }
    }

    input.addEventListener("keydown", eventListener, true);
    console.log("Textarea hijacked", input);
}

function HijackButtonEvents(button: HTMLButtonElement, onSubmit: () => void) {
    function eventListener(event: MouseEvent) {
        onSubmit();
    }

    button.addEventListener("click", eventListener, true);
    console.log("Button hijacked", button);
}

export {HijackButtonEvents, HijackKeyboardEvents};