import { getBucket } from '../../vendor/deps/extend-chrome_storage.js';

const DefaultPrompts = [
  {
    "id": "1",
    "name": "English -> Polish",
    "prompt": "You are a translator between English and Polish. For input text in English, you should output the translation into Polish.",
    "active": true
  },
  {
    "id": "2",
    "name": "Unit test writer",
    "prompt": "Please write tests for given code.",
    "active": true
  },
  {
    "id": "3",
    "name": "Unit test writer 2",
    "prompt": "Please write tests for given code.",
    "active": false
  },
  {
    "id": "4",
    "name": "Unit test writer 3",
    "prompt": "Please write tests for given code.",
    "active": false
  }
];
const EmptyPrompt = {
  "id": "",
  "name": "Helpful assistant",
  "prompt": "You are a helpful assistant...",
  "active": true
};
const getRandomId = () => Math.floor(Math.random() * 1e9).toString();
const localStorage = getBucket("store");
async function initialiseLocalStorage() {
  console.log("initialiseLocalStorage");
  return localStorage.set({ prompts: DefaultPrompts });
}
async function getPrompts() {
  return localStorage.get("prompts").then(({ prompts }) => prompts);
}
async function getActivePrompts() {
  const prompts = await getPrompts();
  return prompts.filter((prompt) => prompt.active);
}
async function addNewPrompt() {
  const prompts = await getPrompts();
  const newPrompt = { ...EmptyPrompt, id: getRandomId() };
  return localStorage.set({ prompts: [...prompts, newPrompt] }).then(({ prompts: prompts2 }) => prompts2);
}
async function removePrompt(id) {
  const prompts = await getPrompts();
  const newPrompts = prompts.filter((prompt) => prompt.id !== id);
  return localStorage.set({ prompts: newPrompts }).then(({ prompts: prompts2 }) => prompts2);
}
async function updatePrompt(data) {
  const prompts = await getPrompts();
  const newPrompts = prompts.map((prompt) => {
    if (prompt.id === data.id) {
      return { ...prompt, ...data };
    }
    return prompt;
  });
  return localStorage.set({ prompts: newPrompts }).then(({ prompts: prompts2 }) => prompts2);
}

export { addNewPrompt, getActivePrompts, getPrompts, initialiseLocalStorage, localStorage, removePrompt, updatePrompt };
