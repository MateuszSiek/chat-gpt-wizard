import {HijackButton, HijackKeyboardEvents} from "./button-hijack";
import {getActivePrompts, getSelectedPrompt, localStorage, Prompt, setSelectedPrompt} from "../utils/local-storage";
import Browser from "webextension-polyfill";
import {render, html} from "htm/preact";
import {useState, useEffect} from "preact/hooks";
import {
    getButton, getChatMessages,
    getRootElement,
    getTextarea,
    getUi,
    MESSAGE_GROUP_SELECTOR,
    MESSAGE_SELECTOR
} from "./selectors";
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

const hijackEvents = () => {
    const button = getButton();
    const textarea = getTextarea();
    if (!button || !textarea) return;

    if (!button.dataset.chatGptWizard) {
        HijackButton(button, () => selectedPrompt && selectedPrompt.prompt);
    }

    if (!textarea.dataset.chatGptWizard) {
        HijackKeyboardEvents(textarea, () => selectedPrompt && selectedPrompt.prompt);
    }
}

const hideNodePrompt = (node: any) => {
    const isInitPrompt = node?.innerHTML?.includes(PROMPT_WRAPPER_TEXT);
    if (!node.dataset.chatGptWizard && isInitPrompt) {
        node.dataset.chatGptWizard = "true";
        node.innerHTML = replaceTextBetweenWords(node.innerHTML, PROMPT_WRAPPER_TEXT, PROMPT_WRAPPER_TEXT, "");
    }
}

const hideUiPrompts = (parent: HTMLElement) => {
    parent.querySelectorAll(MESSAGE_SELECTOR).forEach((node: any) => {
        hideNodePrompt(node);
    });
}

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const addedNodes = Array.from(mutation.addedNodes);

            addedNodes.forEach((node: any) => {
                if (node.matches && node.matches(MESSAGE_GROUP_SELECTOR)) {
                    hideUiPrompts(node);
                }
                if (node.matches && node.matches(MESSAGE_SELECTOR)) {
                    hideNodePrompt(node);
                }
            });
        }
    }
});

observer.observe(document, {childList: true, subtree: true});

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
    const chatMessages = getChatMessages();

    if (chatMessages.length > 0) {
        ui && ui.remove();
        return
    }

    hideUiPrompts(getRootElement());
    hijackEvents();

    if (ui) return;

    if (button && textarea) {

        const textareaParentParent: any = textarea.parentElement!.parentElement;

        const shadowRootDiv = createShadowRoot()
        shadowRootDiv.classList.add('chat-gpt-wizard--shadow-root')
        textareaParentParent.appendChild(shadowRootDiv)

        let div = document.querySelector('.chat-gpt-wizard')
        if (div) div.remove()

        div = document.createElement('div')
        div.classList.add('chat-gpt-wizard--shadow-root')
        textarea.parentElement!.insertBefore(div, textarea.parentElement!.firstChild)
        renderCommands(div);
    }


}

updateUI();

const rootEl = getRootElement()

try {
    new MutationObserver(() => {
        updateUI();
    }).observe(rootEl, {childList: true})
} catch (e: any) {
    console.info("ChatGptWizard error --> Could not update UI:\n", e.stack)
}

export {}
