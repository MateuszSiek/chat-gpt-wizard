import { createHotContext } from '../../node_modules/vite/dist/client/client.mjs.js';
import exports from '../../vendor/react-refresh.js';
import { HijackButtonEvents, HijackKeyboardEvents } from './button-hijack.ts.js';
import { getSelectedPrompt, updateHistory, localStorage, getActivePrompts, setSelectedPrompt, getPromptFromHistory } from '../utils/local-storage.ts.js';
import webextension_polyfill_default from '../../vendor/deps/webextension-polyfill.js';
import { html as m } from '../../vendor/deps/htm_preact.js';
import { useState as h, useEffect as p } from '../../vendor/deps/preact_hooks.js';
import { getTextarea, getChatMessages, getButton, MESSAGE_SELECTOR, MESSAGE_GROUP_SELECTOR, getUi, getModelTitle, getRootElement } from './selectors.ts.js';
import { PROMPT_WRAPPER_TEXT, replaceTextBetweenWords, createShadowRoot, getCurrentChatId } from './util.ts.js';
import { B } from '../../vendor/deps/chunk-VJCEGZAN.js';

import.meta.hot = createHotContext("/src/content/index.tsx.js");let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot) {
  if (!window.__vite_plugin_react_preamble_installed__) {
    throw new Error("@vitejs/plugin-react can't detect preamble. Something is wrong. See https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201");
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    exports.register(type, "/Users/mateuszsiek/Desktop/Projects/chat-gpt-wizard/src/content/index.tsx " + id);
  };
  window.$RefreshSig$ = exports.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
 const Browser = webextension_polyfill_default.__esModule ? webextension_polyfill_default.default : webextension_polyfill_default;
console.info("chrome-ext template-react-ts content scrip");
let selectedPrompt = void 0;
let awaitingHistoryUpdate = false;
let currentChatId = void 0;
getSelectedPrompt().then((prompt) => {
  selectedPrompt = prompt;
});
Browser.runtime.onMessage.addListener(({
  type,
  payload
}) => {
  if (type === "chat-id" && awaitingHistoryUpdate && selectedPrompt) {
    console.log("Browser message", payload);
    awaitingHistoryUpdate = false;
    currentChatId = payload;
    updateHistory(payload, selectedPrompt?.id);
    updateInfoUI({
      chatId: payload,
      prompt: selectedPrompt
    });
  }
});
localStorage.valueStream.subscribe((values) => {
});
function onSubmit() {
  const textArea = getTextarea();
  const chatMessages = getChatMessages();
  console.log("onSubmit", selectedPrompt, textArea, chatMessages);
  removeSelectUI();
  if (!textArea || !selectedPrompt || chatMessages.length > 0) {
    return;
  }
  const currentText = textArea.value;
  const promptText = selectedPrompt.prompt;
  textArea.value = promptText ? PROMPT_WRAPPER_TEXT + promptText + PROMPT_WRAPPER_TEXT + currentText : currentText;
  awaitingHistoryUpdate = true;
}
const hijackEvents = () => {
  const button = getButton();
  const textarea = getTextarea();
  if (!button || !textarea)
    return;
  HijackButtonEvents(button, onSubmit);
  HijackKeyboardEvents(textarea, onSubmit);
};
const hideNodePrompt = (node) => {
  const isInitPrompt = node?.innerHTML?.includes(PROMPT_WRAPPER_TEXT);
  if (!node.dataset.chatGptWizard && isInitPrompt) {
    node.dataset.chatGptWizard = "true";
    node.innerHTML = replaceTextBetweenWords(node.innerHTML, PROMPT_WRAPPER_TEXT, PROMPT_WRAPPER_TEXT, "");
  }
};
const hideUiPrompts = (parent) => {
  parent.querySelectorAll(MESSAGE_SELECTOR).forEach((node) => {
    hideNodePrompt(node);
  });
};
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      const addedNodes = Array.from(mutation.addedNodes);
      addedNodes.forEach((node) => {
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
observer.observe(document, {
  childList: true,
  subtree: true
});
const PromptsDropdown = () => {
  _s();
  const [prompts, setPrompts] = h([]);
  const [selectedId, setSelectedId] = h(selectedPrompt && selectedPrompt.id);
  p(() => {
    Promise.all([getActivePrompts(), getSelectedPrompt()]).then(([prompts2, prompt]) => {
      setPrompts(prompts2);
      setSelectedId(prompt && prompt.id);
    });
  }, []);
  const handleChange = (event) => {
    selectedPrompt = prompts.find(({
      id
    }) => id === event.target.value);
    const selectedPromptId = selectedPrompt && selectedPrompt.id;
    selectedPromptId && setSelectedPrompt(selectedPromptId);
    setSelectedId(selectedPromptId);
    setTextPlaceholder(selectedPrompt);
  };
  const SELECT_CLASS = "chat-gpt-wizard--select cursor-default rounded-md border border-black/10 bg-white text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm";
  return m`
		<div class="chat-gpt-wizard--select-wrapper">
			<div class="chat-gpt-wizard--select-label text-xs text-gray-700 dark:text-gray-500">Select prompt</div>
			<select onChange=${handleChange} class=${SELECT_CLASS} name="cars" id="cars">
				<option value="" selected=${!selectedId && "selected"}></option>
				${prompts.map(({
    name,
    id
  }) => m`
					<option value="${id}" selected=${selectedId === id && "selected"}>${name}</option>`)}
			</select>
		</div>`;
};
_s(PromptsDropdown, "ZVyoSuKQ9d/TAZX2prNlTwAQDQw=");
_c = PromptsDropdown;
function renderCommands(container) {
  B(m`
		<${PromptsDropdown}/>`, container);
}
async function updateSelectUI() {
  if (getUi())
    return;
  const textarea = getTextarea();
  const textareaParentParent = textarea.parentElement.parentElement;
  const shadowRootDiv = createShadowRoot();
  shadowRootDiv.classList.add("chat-gpt-wizard--shadow-root");
  textareaParentParent.appendChild(shadowRootDiv);
  let ui = document.createElement("div");
  ui.classList.add("chat-gpt-wizard");
  const form = document.querySelector("form");
  form.parentElement.insertBefore(ui, form.parentElement.firstChild);
  renderCommands(ui);
}
function setTextPlaceholder(prompt) {
  const textArea = getTextarea();
  if (!textArea)
    return;
  textArea.placeholder = prompt?.placeholder || "Send a message...";
}
async function updateInfoUI({
  chatId,
  prompt
} = {}) {
  const modelTitle = getModelTitle();
  const currentId = chatId || getCurrentChatId();
  const historyPrompt = prompt || currentId && await getPromptFromHistory(currentId);
  console.log("updateInfoUI", modelTitle, currentId, historyPrompt);
  if (modelTitle && historyPrompt) {
    const title = modelTitle.innerText;
    modelTitle.innerText = title + " --- ChatGptWizard prompt: " + historyPrompt.name;
    setTextPlaceholder(historyPrompt);
  }
}
function removeSelectUI() {
  const ui = getUi();
  ui && ui.remove();
}
async function updateUI() {
  const ui = getUi();
  const button = getButton();
  const textarea = getTextarea();
  const chatMessages = getChatMessages();
  console.log("updateUI", ui, chatMessages, textarea);
  hideUiPrompts(getRootElement());
  if (chatMessages.length > 0) {
    removeSelectUI();
    await updateInfoUI();
    return;
  }
  hijackEvents();
  if (button && textarea) {
    await updateSelectUI();
  }
}
updateUI();
const rootEl = getRootElement();
try {
  new MutationObserver(() => {
    updateUI();
  }).observe(rootEl, {
    childList: true
  });
} catch (e) {
  console.info("ChatGptWizard error --> Could not update UI:\n", e.stack);
}
window.addEventListener("hashchange", function(event) {
  updateUI();
});
var _c;
$RefreshReg$(_c, "PromptsDropdown");
if (import.meta.hot) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
  import.meta.hot.accept();
  if (!window.__vite_plugin_react_timeout) {
    window.__vite_plugin_react_timeout = setTimeout(() => {
      window.__vite_plugin_react_timeout = 0;
      exports.performReactRefresh();
    }, 30);
  }
}
