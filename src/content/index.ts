import {HijackButton, HijackKeyboardEvents} from "./button-hijack";
import {localStorage} from "../utils/local-storage";

console.info('chrome-ext template-react-ts content script1234')

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
    // if (request.type === 'urlChange') {
    //     // handleURLChange();
    //     console.log("URL CHANGE");
    //     setTimeout(()=>{
    //
    //     HijackButton();
    //     }, 1000)
    // }
});

export {}
