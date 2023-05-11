import { useEffect, useState } from "preact/hooks";
import { Prompt } from "../utils/prompts";
import {
  getActivePrompts,
  getSelectedPrompt,
  localStorage,
  setSelectedPrompt,
  Store,
} from "../utils/local-storage";
import { html } from "htm/preact";
import { Changes } from "@extend-chrome/storage";
import { handleKeyboardPromptChange } from "./util";

function DropdownOption({
  prompt,
  index,
  selected,
}: {
  prompt: Prompt;
  index: number;
  selected?: boolean;
}) {
  const prefix = index < 9 ? `[${index + 1}] ` : "";
  const displayName = prefix + prompt.name;
  return html` <option value="${prompt.id}" selected=${selected && "selected"}>
    ${displayName}
  </option>`;
}

export default function PromptsDropdown({
  onChange,
}: {
  onChange: (prompt?: Prompt) => void;
}) {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [selected, setSelected] = useState<Prompt | undefined>();
  const [localStorageUpdate, setLocalStorageUpdate] =
    useState<Changes<Store>>();

  const setLatestPrompts = () => {
    getActivePrompts().then((prompts) => {
      setPrompts(prompts);
    });
  };

  useEffect(() => {
    setLatestPrompts();
    getSelectedPrompt().then((prompt) => {
      setSelected(prompt);
    });
    const sub = localStorage.changeStream.subscribe(setLocalStorageUpdate);
    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    if (localStorageUpdate?.selectedPromptId) {
      const prompt = prompts?.find(
        ({ id }) => id === localStorageUpdate?.selectedPromptId?.newValue
      );
      setSelected(prompt);
    }
    if (localStorageUpdate?.prompts?.newValue) {
      setLatestPrompts();
    }
  }, [localStorageUpdate]);

  const handleChange = (event: any) => {
    const prompt = prompts.find(({ id }) => id === event?.target?.value);
    setSelectedPrompt(prompt?.id).then(() => {});
    setSelected(prompt);
    onChange(prompt);
  };

  const SELECT_CLASS =
    "chat-gpt-wizard--select cursor-default rounded-md border border-black/10 bg-white text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm";
  return html`
    <div
      class="chat-gpt-wizard--select-wrapper"
      onKeyDown=${handleKeyboardPromptChange}
    >
      <div
        class="chat-gpt-wizard--select-label text-xs text-gray-700 dark:text-gray-600"
      >
        Select prompt
      </div>
      <select onChange=${handleChange} class=${SELECT_CLASS}>
        <option value="" selected=${!selected?.id && "selected"}></option>
        ${prompts.map((prompt: Prompt, index) =>
          DropdownOption({
            prompt,
            index,
            selected: selected?.id === prompt.id,
          })
        )}
      </select>
      <div
        class="chat-gpt-wizard--select-instructions dark:text-gray-500 text-xs text-black/50"
      >
        ${selected?.instructions} ‎
      </div>
    </div>
  `;
}
