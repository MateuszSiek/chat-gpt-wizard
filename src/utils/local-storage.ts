import { getBucket } from "@extend-chrome/storage";
import { DefaultPrompts, EmptyPrompt, Prompt } from "./prompts";

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

export async function getPrompt(id: string): Promise<Prompt | undefined> {
  const prompts = await getPrompts();
  return prompts.find((prompt) => prompt.id === id);
}

export async function getActivePrompts(): Promise<Prompt[]> {
  const prompts = await getPrompts();
  return prompts.filter((prompt) => prompt.active);
}

function generateID(maxLength: number = 5): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export async function addNewPrompt() {
  const prompts = await getPrompts();
  const newPrompt = { ...EmptyPrompt, id: generateID(), active: false };

  return localStorage
    .set({ prompts: [newPrompt, ...prompts] })
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
