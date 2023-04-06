function HijackKeyboardEvents(input, onSubmit) {
  function eventListener(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      onSubmit();
    }
  }
  input.addEventListener("keydown", eventListener, true);
  console.log("Textarea hijacked", input);
}
function HijackButtonEvents(button, onSubmit) {
  function eventListener(event) {
    onSubmit();
  }
  button.addEventListener("click", eventListener, true);
  console.log("Button hijacked", button);
}

export { HijackButtonEvents, HijackKeyboardEvents };
