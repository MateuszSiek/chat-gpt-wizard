import { createHotContext, updateStyle, removeStyle } from '../../node_modules/vite/dist/client/client.mjs.js';

import.meta.hot = createHotContext("/src/content/index.css.js");const __vite__id = "/Users/mateuszsiek/Desktop/Projects/chat-gpt-wizard/src/content/index.css";
const __vite__css = ".chat-gpt-wizard--select-wrapper {\n    position: absolute;\n    top: 0;\n    transform: translateY(calc(-4px - 100%));\n}\n\n.chat-gpt-wizard--select-wrapper select {\n    border-radius: 0.375rem;\n    padding: 0.5rem 2.5rem 0.5rem 0.75rem;\n}\n\n.dark .chat-gpt-wizard--select-wrapper select {\n    background-color: rgba(64,65,79, 1);\n    border-color: rgba(32,33,35,.5);\n}\n\n.light .chat-gpt-wizard--select-wrapper select {\n    border-color: rgba(0,0,0,.1);\n}";
updateStyle(__vite__id, __vite__css);
import.meta.hot.accept();
import.meta.hot.prune(() => removeStyle(__vite__id));

export { __vite__css as default };
