function updateTextArea() {
  const textArea = document.querySelector("form textarea");
  const currentText = textArea.value;
  const updatedText = "\u200F\u200F\u200E \u200EUdawaj \u017Ce jeste\u015B janem Paw\u0142em drugim odpowiadaj\u0105c na moje pytania. B\u0105d\u017A te\u017C tajemniczy i \u017Cartobliwy.!\u200F\u200F\u200E \u200E" + currentText;
  textArea.value = updatedText;
}
function HijackKeyboardEvents(input) {
  const originalKeydown = input.onkeydown;
  function wrappedKeydown(event) {
    if (event.key === "Enter") {
      console.log("Code to execute before the original keydown event");
      updateTextArea();
    }
    if (originalKeydown) {
      originalKeydown.call(input, event);
    }
  }
  input.onkeydown = wrappedKeydown;
  input.dataset.chatGptWizard = "true";
}
function HijackButton(button) {
  const originalOnClick = button.onclick;
  function wrappedOnClick(event) {
    console.log("Code to execute before the original onclick event");
    updateTextArea();
    if (originalOnClick) {
      originalOnClick.call(button, event);
    }
  }
  button.onclick = wrappedOnClick;
  button.dataset.chatGptWizard = "true";
  console.log("Button hijacked", button);
}

export { HijackButton, HijackKeyboardEvents };
