import { createHotContext } from '../../node_modules/vite/dist/client/client.mjs.js';
import exports from '../../vendor/react-refresh.js';
import { HijackButton, HijackKeyboardEvents } from './button-hijack.ts.js';
import { localStorage, getActivePrompts } from '../utils/local-storage.ts.js';
import { html as m } from '../../vendor/deps/htm_preact.js';
import { useState as h, useEffect as p } from '../../vendor/deps/preact_hooks.js';
import __vite__css from './index.css.js';
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
console.info("chrome-ext template-react-ts content scrip", __vite__css);
localStorage.changeStream.subscribe((change) => {
  console.log("localStorage.changeStream", change);
});
localStorage.valueStream.subscribe((values) => {
  console.log("Everything in this bucket", values);
});
const handleButtonChange = (element) => {
  if (!element.dataset.chatGptWizard) {
    console.log("Element changed:", element);
    HijackButton(element);
  }
  const textArea = document.querySelector("form textarea");
  if (!textArea.dataset.chatGptWizard) {
    console.log("textArea Element changed:", textArea);
    HijackKeyboardEvents(textArea);
  }
};
function replaceTextBetweenWords(inputString, firstWord, secondWord, replacement) {
  const regex = new RegExp(firstWord + ".*?" + secondWord, "g");
  return inputString.replace(regex, replacement);
}
const selectorsAndHandlers = {
  "form textarea+button": handleButtonChange,
  ":not(button)": function handleElementChange2(element) {
    const updateTextNode = (node) => {
      const isInitPrompt = node?.innerHTML?.includes("\u200F\u200F\u200E \u200E");
      if (!node.dataset.chatGptWizard && isInitPrompt) {
        console.log("Element changed (Selector 2):", node);
        node.dataset.chatGptWizard = "true";
        node.innerHTML = replaceTextBetweenWords(node.innerHTML, "\u200F\u200F\u200E \u200E", "\u200F\u200F\u200E \u200E", "");
      }
    };
    if (element.matches(".items-start")) {
      updateTextNode(element);
    } else {
      element.querySelectorAll(".items-start").forEach((node) => {
        updateTextNode(node);
      });
    }
  }
};
function handleElementChange(element) {
  for (const selector in selectorsAndHandlers) {
    if (element.matches(selector)) {
      selectorsAndHandlers[selector](element);
    }
  }
}
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      const addedNodes = Array.from(mutation.addedNodes);
      const removedNodes = Array.from(mutation.removedNodes);
      const targetNodes = addedNodes.concat(removedNodes);
      targetNodes.forEach((node) => {
        if (node.matches) {
          handleElementChange(node);
        }
      });
    }
    if (mutation.type === "attributes") {
      handleElementChange(mutation.target);
    }
  }
});
const config = {
  childList: true,
  subtree: true,
  attributes: true
};
observer.observe(document, config);
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, sender);
});
function getRootElement() {
  return document.querySelector('div[id="__next"]');
}
const rootEl = getRootElement();
function createShadowRoot() {
  const shadowRootDiv = document.createElement("div");
  const shadowRoot = shadowRootDiv.attachShadow({
    mode: "open"
  });
  const style = document.createElement("style");
  style.textContent = __vite__css;
  shadowRoot.append(style);
  return shadowRootDiv;
}
const PromptsDropdown = () => {
  _s();
  const [prompts, setPrompts] = h([]);
  p(() => {
    getActivePrompts().then((prompts2) => {
      setPrompts(prompts2);
    });
  }, []);
  return m`
		<div class="chat-gpt-wizard--select-wrapper">
			<select class="chat-gpt-wizard--select" name="cars" id="cars">
				${prompts.map(({
    name,
    id
  }) => m`
					<option value="${id}">${name}</option>`)}
			</select>
		</div>`;
};
_s(PromptsDropdown, "C5cVCCAIIJ7mrF3oF6t1CliAlfs=");
_c = PromptsDropdown;
function renderCommands(container) {
  B(m`
		<${PromptsDropdown}/>`, container);
}
async function updateUI() {
  const ui = rootEl.querySelector(".chat-gpt-wizard");
  const button = rootEl.querySelector("form textarea+button");
  const textarea = rootEl.querySelector("form textarea");
  console.log("RENER UI");
  if (ui)
    return;
  if (button && textarea) {
    const textareaParentParent = textarea.parentElement.parentElement;
    textareaParentParent.style.flexDirection = "column";
    textareaParentParent.parentElement.style.flexDirection = "column";
    textareaParentParent.parentElement.style.gap = "0px";
    textareaParentParent.parentElement.style.marginBottom = "0.5em";
    const shadowRootDiv = createShadowRoot();
    shadowRootDiv.classList.add("chat-gpt-wizard");
    textareaParentParent.appendChild(shadowRootDiv);
    textarea.parentElement.style.flexDirection = "row";
    renderCommands(textareaParentParent);
  }
}
updateUI();
try {
  new MutationObserver(() => {
    updateUI();
  }).observe(rootEl, {
    childList: true
  });
} catch (e) {
  console.info("WebChatGPT error --> Could not update UI:\n", e.stack);
}
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
