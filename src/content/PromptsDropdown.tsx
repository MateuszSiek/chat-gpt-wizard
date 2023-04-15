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

export default function PromptsDropdown({
  onChange,
}: {
  onChange: (prompt?: Prompt) => void;
}) {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [selected, setSelected] = useState<Prompt | undefined>();
  const [localStorageUpdate, setLocalStorageUpdate] =
    useState<Changes<Store>>();

  useEffect(() => {
    Promise.all([getActivePrompts(), getSelectedPrompt()]).then(
      ([prompts, prompt]) => {
        setPrompts(prompts);
        setSelected(prompt);
      }
    );
    const sub = localStorage.changeStream.subscribe(setLocalStorageUpdate);
    return () => sub.unsubscribe();
  }, []);

  useEffect(() => {
    if (localStorageUpdate?.selectedPromptId?.newValue) {
      const prompt = prompts?.find(
        ({ id }) => id === localStorageUpdate?.selectedPromptId?.newValue
      );
      setSelected(prompt);
    }
    if (localStorageUpdate?.prompts?.newValue) {
      setPrompts(localStorageUpdate?.prompts.newValue);
    }
  }, [localStorageUpdate]);

  const handleChange = (event: any) => {
    const prompt = prompts.find(({ id }) => id === event.target.value);
    const selectedPromptId = prompt?.id;
    selectedPromptId && setSelectedPrompt(selectedPromptId);
    setSelected(prompt);
    onChange(prompt);
  };

  const SELECT_CLASS =
    "chat-gpt-wizard--select cursor-default rounded-md border border-black/10 bg-white text-left focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 dark:border-white/20 dark:bg-gray-800 sm:text-sm";
  return html`
    <div class="chat-gpt-wizard--select-wrapper">
      <div
        class="chat-gpt-wizard--select-label text-xs text-gray-700 dark:text-gray-500"
      >
        Select prompt
      </div>
      <select
        onChange=${handleChange}
        class=${SELECT_CLASS}
        name="cars"
        id="cars"
      >
        <option value="" selected=${!selected?.id && "selected"}></option>
        ${prompts.map(
          ({ name, id }: Prompt) => html` <option
            value="${id}"
            selected=${selected?.id === id && "selected"}
          >
            ${name}
          </option>`
        )}
      </select>
      ${selected?.instructions &&
      html`
        <div
          class="chat-gpt-wizard--select-instructions text-xs text-black/50 dark:text-white/50"
        >
          ${selected.instructions}
        </div>
      `}
    </div>
  `;
}
