import { getBucket } from "@extend-chrome/storage";
import { DefaultPrompts, EmptyPrompt, Prompt } from "./prompts";

const getRandomId = () => Math.floor(Math.random() * 1000000000).toString();

interface PromptHistory {
  promptId: string;
  chatId: string;
}

type Theme = "light" | "dark";

interface UserPreferences {
  theme?: Theme;
}

export interface Store {
  userPreferences: UserPreferences;
  prompts: Prompt[];
  selectedPromptId: string;
  promptsHistory: PromptHistory[];
}

export const localStorage = getBucket<Store>("store");

export async function initialiseLocalStorage() {
  return localStorage.set({
    prompts: DefaultPrompts,
    promptsHistory: [],
    selectedPromptId: "",
    userPreferences: {},
  });
}

// ------------------------------
// USER SETTINGS
// ------------------------------
export async function getPreferredTheme(): Promise<Theme | undefined> {
  return localStorage
    .get("userPreferences")
    .then(({ userPreferences }) => userPreferences.theme);
}

export async function setPreferredTheme(theme: Theme): Promise<Theme> {
  return localStorage
    .set({ userPreferences: { theme } })
    .then(({ userPreferences }) => userPreferences.theme!);
}

// ------------------------------
// PROMPTS
// ------------------------------
export async function getPrompts(): Promise<Prompt[]> {
  return localStorage.get("prompts").then(({ prompts }) => prompts);
}

export async function setPrompts(data: Prompt[]): Promise<Prompt[]> {
  return localStorage.set({ prompts: data }).then(({ prompts }) => prompts);
}

export async function getActivePrompts(): Promise<Prompt[]> {
  const prompts = await getPrompts();
  return prompts.filter((prompt) => prompt.active);
}

export async function addNewPrompt() {
  const prompts = await getPrompts();
  const newPrompt = { ...EmptyPrompt, id: getRandomId() };

  return localStorage
    .set({ prompts: [...prompts, newPrompt] })
    .then(({ prompts }) => prompts);
}

export async function removePrompt(id: string) {
  const prompts = await getPrompts();
  const newPrompts = prompts.filter((prompt) => prompt.id !== id);

  return localStorage
    .set({ prompts: newPrompts })
    .then(({ prompts }) => prompts);
}

export async function updatePrompt(data: Partial<Prompt>): Promise<Prompt[]> {
  const prompts = await getPrompts();
  const newPrompts = prompts.map((prompt) => {
    if (prompt.id === data.id) {
      return { ...prompt, ...data };
    }
    return prompt;
  });

  return localStorage
    .set({ prompts: newPrompts })
    .then(({ prompts }) => prompts);
}

export async function setSelectedPrompt(id: string) {
  return localStorage.set({ selectedPromptId: id });
}

export async function getSelectedPrompt(): Promise<Prompt | undefined> {
  const { selectedPromptId } = await localStorage.get("selectedPromptId");
  const prompts = await getPrompts();

  return (
    prompts.find((prompt) => prompt.id === selectedPromptId) || EmptyPrompt
  );
}

// ------------------------------
// HISTORY
// ------------------------------
export async function updateHistory(
  chatId: string,
  promptId: string
): Promise<PromptHistory[]> {
  const { promptsHistory } = await localStorage.get("promptsHistory");
  const newHistory = [...promptsHistory, { chatId, promptId }];

  return localStorage
    .set({ promptsHistory: newHistory })
    .then(({ promptsHistory }) => promptsHistory);
}

export async function getHistory(chatId: string): Promise<PromptHistory> {
  const { promptsHistory } = await localStorage.get("promptsHistory");
  return promptsHistory.filter((history) => history.chatId === chatId)[0];
}

export async function getPromptFromHistory(
  chatId: string
): Promise<Prompt | undefined> {
  const history = await getHistory(chatId);
  const prompts = await getPrompts();

  return prompts.find((prompt) => prompt.id === history?.promptId);
}
