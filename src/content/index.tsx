import {HijackButton, HijackKeyboardEvents} from "./button-hijack";
import {getActivePrompts, getSelectedPrompt, localStorage, Prompt, setSelectedPrompt} from "../utils/local-storage";
import Browser from "webextension-polyfill";
import {render, html} from "htm/preact";
import {useState, useEffect} from "preact/hooks";
import {BUTTON_SELECTOR, getButton, getRootElement, getTextarea, getUi, MESSAGE_SELECTOR} from "./selectors";
import {createShadowRoot, PROMPT_WRAPPER_TEXT, replaceTextBetweenWords} from "./util";

console.info('chrome-ext template-react-ts content scrip')

let selectedPrompt: Prompt | undefined = undefined;

getSelectedPrompt().then((prompt) => {
    selectedPrompt = prompt;
    // console.log("selectedPrompt", selectedPrompt);
});

localStorage.valueStream.subscribe((values) => {
    // console.log('Everything in this bucket', values)
})

const handleButtonChange = (element: HTMLButtonElement) => {
    if (!element.dataset.chatGptWizard) {
        HijackButton(element, () => selectedPrompt && selectedPrompt.prompt);
    }

    const textArea = document.querySelector('form textarea') as HTMLTextAreaElement;
    if (!textArea.dataset.chatGptWizard) {
        HijackKeyboardEvents(textArea, () => selectedPrompt && selectedPrompt.prompt);
    }
}

const selectorsAndHandlers: any = {
    [BUTTON_SELECTOR]: handleButtonChange,
    ':not(button)': function handleElementChange2(element: HTMLElement) {
        const updateTextNode = (node: any) => {
            const isInitPrompt = node?.innerHTML?.includes(PROMPT_WRAPPER_TEXT);
            if (!node.dataset.chatGptWizard && isInitPrompt) {
                node.dataset.chatGptWizard = "true";
                node.innerHTML = replaceTextBetweenWords(node.innerHTML, PROMPT_WRAPPER_TEXT, PROMPT_WRAPPER_TEXT, "");
            }
        }
        if (element.matches(MESSAGE_SELECTOR)) {
            updateTextNode(element);
        } else {
            element.querySelectorAll(MESSAGE_SELECTOR).forEach((node: any) => {
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
observer.observe(document, {childList: true, subtree: true, attributes: true});

// TODO update submit events based on the repo, for example enter + shift case which does not trigger submit event

const PromptsDropdown = () => {
    const [prompts, setPrompts] = useState<Prompt[]>([])
    const [selectedId, setSelectedId] = useState<string | undefined>(selectedPrompt && selectedPrompt.id);
    useEffect(() => {
        getActivePrompts().then((prompts) => {
            setPrompts(prompts);
        });
    }, []);

    const handleChange = (event: any) => {
        selectedPrompt = prompts.find(({id}) => id === event.target.value);
        const selectedPromptId = selectedPrompt && selectedPrompt.id;
        selectedPromptId && setSelectedPrompt(selectedPromptId);
        setSelectedId(selectedPromptId);
    }

    return html`
		<div class="chat-gpt-wizard--select-wrapper">
			<select onChange=${handleChange} class="chat-gpt-wizard--select" name="cars" id="cars">
				<option value="" selected=${!selectedId && "selected"}></option>
				${prompts.map(({name, id}: Prompt) => html`
					<option value="${id}" selected=${selectedId === id && "selected"}>${name}</option>`)}
			</select>
		</div>`;
}

function renderCommands(container: any) {
    render(html`
		<${PromptsDropdown}/>`, container);
}

async function updateUI() {
    const ui = getUi();
    const button = getButton();
    const textarea = getTextarea();

    if (ui) return;

    if (button && textarea) {

        const textareaParentParent: any = textarea.parentElement!.parentElement;
        textareaParentParent.style.flexDirection = 'column'
        textareaParentParent.parentElement.style.flexDirection = 'column'
        textareaParentParent.parentElement.style.gap = '0px'
        textareaParentParent.parentElement.style.marginBottom = '0.5em'

        const shadowRootDiv = createShadowRoot()
        shadowRootDiv.classList.add('chat-gpt-wizard')
        textareaParentParent.appendChild(shadowRootDiv)
        textarea.parentElement!.style.flexDirection = 'row'

        renderCommands(textareaParentParent);
    }

}

updateUI()

const rootEl = getRootElement()

try {
    new MutationObserver(() => {
        updateUI()
    }).observe(rootEl, {childList: true})
} catch (e: any) {
    console.info("ChatGptWizard error --> Could not update UI:\n", e.stack)
}

export {}
