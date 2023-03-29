function updateTextArea() {

    const textArea: HTMLTextAreaElement = document.querySelector('form textarea') as HTMLTextAreaElement;
    const currentText = textArea.value;
    const updatedText = "‏‏‎ ‎" + "Udawaj że jesteś janem Pawłem drugim odpowiadając na moje pytania. Bądź też tajemniczy i żartobliwy.!" + "‏‏‎ ‎" + currentText;
    textArea.value = updatedText;
}

function HijackKeyboardEvents(input: HTMLTextAreaElement) {

// Store the original keydown event handler
    const originalKeydown = input.onkeydown;

// Create a new function to wrap the original keydown event
    function wrappedKeydown(event: KeyboardEvent) {
        if (event.key === "Enter") {
            console.log('Code to execute before the original keydown event');
            updateTextArea();
        }
        // Call the original keydown event handler
        if (originalKeydown) {
            originalKeydown.call(input, event);
        }
    }

// Replace the input's keydown event handler with the new wrapped function
    input.onkeydown = wrappedKeydown;
    input.dataset.chatGptWizard = "true";
}

function HijackButton(button: HTMLButtonElement) {
    const originalOnClick = button.onclick;

    function wrappedOnClick(event: MouseEvent) {
        console.log('Code to execute before the original onclick event');

        updateTextArea();
        if (originalOnClick) {
            originalOnClick.call(button, event);
        }
    }

    button.onclick = wrappedOnClick;
    button.dataset.chatGptWizard = "true";

    console.log("Button hijacked", button);
}

export {HijackButton, HijackKeyboardEvents};