import css from "./index.css";

export const PROMPT_WRAPPER_TEXT = "‏‏‎ ‎";

export function createShadowRoot() {
    const shadowRootDiv = document.createElement('div')
    const shadowRoot = shadowRootDiv.attachShadow({mode: 'open'})
    const style = document.createElement('style')
    style.textContent = css;
    shadowRoot.append(style)
    return shadowRootDiv
}


export function replaceTextBetweenWords(inputString: string, firstWord: string, secondWord: string, replacement: string) {
    const regex = new RegExp(firstWord + '.*?' + secondWord, 'gs');
    return inputString.replace(regex, replacement);
}