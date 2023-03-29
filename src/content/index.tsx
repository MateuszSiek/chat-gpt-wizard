import {HijackButton, HijackKeyboardEvents} from "./button-hijack";
import {localStorage} from "../utils/local-storage";
import {render} from "preact";
import Browser from "webextension-polyfill";

console.info('chrome-ext template-react-ts content scrip')

localStorage.changeStream
    .subscribe((change) => {
        console.log('localStorage.changeStream', change)
    })

localStorage.valueStream.subscribe((values) => {
    console.log('Everything in this bucket', values)
})

const handleButtonChange = (element: HTMLButtonElement) => {
    if (!element.dataset.chatGptWizard) {
        console.log('Element changed:', element);
        HijackButton(element);
    }

    const textArea = document.querySelector('form textarea') as HTMLTextAreaElement;
    if (!textArea.dataset.chatGptWizard) {
        console.log('textArea Element changed:', textArea);
        HijackKeyboardEvents(textArea);
    }
}

function replaceTextBetweenWords(inputString: string, firstWord: string, secondWord: string, replacement: string) {
    const regex = new RegExp(firstWord + '.*?' + secondWord, 'g');
    return inputString.replace(regex, replacement);
}

const selectorsAndHandlers: any = {
    'form textarea+button': handleButtonChange,
    ':not(button)': function handleElementChange2(element: HTMLElement) {
        const updateTextNode = (node: any) => {
            const isInitPrompt = node?.innerHTML?.includes('‏‏‎ ‎');
            if (!node.dataset.chatGptWizard && isInitPrompt) {
                console.log('Element changed (Selector 2):', node);
                node.dataset.chatGptWizard = "true";
                node.innerHTML = replaceTextBetweenWords(node.innerHTML, "‏‏‎ ‎", "‏‏‎ ‎", "");//node.innerHTML.replace('** Please call me sir **', '');
            }
        }
        if (element.matches('.items-start')) {
            updateTextNode(element);
        } else {
            element.querySelectorAll('.items-start').forEach((node: any) => {
                updateTextNode(node);
            });
        }
    },
    // Add more selectors and functions as needed
};

function handleElementChange(element: HTMLElement) {
    for (const selector in selectorsAndHandlers) {
        if (element.matches(selector)) {
            selectorsAndHandlers[selector](element);
        }
    }
}

// Create a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            // Check if the element is added or removed
            const addedNodes = Array.from(mutation.addedNodes);
            const removedNodes = Array.from(mutation.removedNodes);
            const targetNodes = addedNodes.concat(removedNodes);

            console.log("addedNodes", addedNodes);
            targetNodes.forEach((node: any) => {
                if (node.matches) {
                    handleElementChange(node);
                }
            });
        }

        if (mutation.type === 'attributes') {
            // Handle attribute changes for the element
            handleElementChange(mutation.target as HTMLButtonElement);
        }
    }
});

// Observe the whole document for changes
const config = {childList: true, subtree: true, attributes: true};
observer.observe(document, config);


chrome.runtime.onMessage.addListener((request: any, sender: chrome.runtime.MessageSender, sendResponse: Function) => {
    console.log(request, sender);
});

// TODO update submit events based on the repo, for example enter + shift case which does not trigger submit event

function getRootElement(): HTMLDivElement {
    return document.querySelector('div[id="__next"]')!;
}

const rootEl = getRootElement()

async function createShadowRoot(pathToCSS: string) {
    const shadowRootDiv = document.createElement('div')
    const shadowRoot = shadowRootDiv.attachShadow({ mode: 'open' })
    const style = document.createElement('style')
    // style.textContent = await fetch(Browser.runtime.getURL(pathToCSS)).then(response => response.text())
    shadowRoot.append(style)
    return { shadowRootDiv, shadowRoot }
}

async function updateUI() {
    const ui = rootEl.querySelector('.chat-gpt-wizard');
    const button = rootEl.querySelector('form textarea+button');
    const textarea = rootEl.querySelector('form textarea');

    console.log("RENER UI");
    if(ui) return;

    if (button && textarea) {

        const textareaParentParent: any = textarea.parentElement!.parentElement;
        textareaParentParent.style.flexDirection = 'column'
        textareaParentParent.parentElement.style.flexDirection = 'column'
        textareaParentParent.parentElement.style.gap = '0px'
        textareaParentParent.parentElement.style.marginBottom = '0.5em'

        const { shadowRootDiv, shadowRoot } = await createShadowRoot('content-scripts/mainUI.css')
        shadowRootDiv.classList.add('chat-gpt-wizard')
        textareaParentParent.appendChild(shadowRootDiv)
        render(<div>TEST</div>, shadowRoot);
        render(<div>TEST</div>, textareaParentParent);

        textarea.parentElement!.style.flexDirection = 'row'
        //
        // renderSlashCommandsMenu()
    }

}

// window.onload = function () {
    updateUI()

    try {
        new MutationObserver(() => {
            updateUI()
        }).observe(rootEl, { childList: true })
    } catch (e: any) {
        console.info("WebChatGPT error --> Could not update UI:\n", e.stack)
    }
// }

export {}
