import { getBucket } from '../../vendor/deps/extend-chrome_storage.js';
import { DefaultPrompts, EmptyPrompt } from './prompts.ts.js';

const getRandomId = () => Math.floor(Math.random() * 1e9).toString();
const localStorage = getBucket("store");
async function initialiseLocalStorage() {
  console.log("initialiseLocalStorage");
  return localStorage.set({ prompts: DefaultPrompts, promptsHistory: [], selectedPromptId: "" });
}
async function getPrompts() {
  return localStorage.get("prompts").then(({ prompts }) => prompts);
}
async function setPrompts(data) {
  return localStorage.set({ prompts: data }).then(({ prompts }) => prompts);
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
async function setSelectedPrompt(id) {
  return localStorage.set({ selectedPromptId: id });
}
async function getSelectedPrompt() {
  const { selectedPromptId } = await localStorage.get("selectedPromptId");
  const prompts = await getPrompts();
  return prompts.find((prompt) => prompt.id === selectedPromptId) || EmptyPrompt;
}
async function updateHistory(chatId, promptId) {
  const { promptsHistory } = await localStorage.get("promptsHistory");
  const newHistory = [...promptsHistory, { chatId, promptId }];
  return localStorage.set({ promptsHistory: newHistory }).then(({ promptsHistory: promptsHistory2 }) => promptsHistory2);
}
async function getHistory(chatId) {
  const { promptsHistory } = await localStorage.get("promptsHistory");
  return promptsHistory.filter((history) => history.chatId === chatId)[0];
}
async function getPromptFromHistory(chatId) {
  const history = await getHistory(chatId);
  const prompts = await getPrompts();
  return prompts.find((prompt) => prompt.id === history?.promptId);
}

export { addNewPrompt, getActivePrompts, getHistory, getPromptFromHistory, getPrompts, getSelectedPrompt, initialiseLocalStorage, localStorage, removePrompt, setPrompts, setSelectedPrompt, updateHistory, updatePrompt };
