let inputRef: HTMLTextAreaElement;
let buttonRef: HTMLButtonElement;

function HijackKeyboardEvents(
  input: HTMLTextAreaElement,
  onSubmit: () => void
) {
  if (inputRef === input) return;
  function eventListener(event: KeyboardEvent) {
    if (event.key === "Enter" && !event.shiftKey) {
      onSubmit();
    }
  }

  input.addEventListener("keydown", eventListener, true);
  inputRef = input;
  // console.log("Textarea hijacked", input);
}

function HijackButtonEvents(button: HTMLButtonElement, onSubmit: () => void) {
  if (buttonRef === button) return;
  function eventListener(event: MouseEvent) {
    onSubmit();
  }

  button.addEventListener("click", eventListener, true);
  buttonRef = button;
  // console.log("Button hijacked", button);
}

export { HijackButtonEvents, HijackKeyboardEvents };
