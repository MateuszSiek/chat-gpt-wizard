import "./Popup.css";
import { useEffect, useState } from "react";
import {
  addNewPrompt,
  getPrompts,
  removePrompt,
  setPrompts,
  updatePrompt,
} from "../utils/local-storage";
import { PromptsAccordion } from "./prompts_accordion";
import { Button } from "@mantine/core";
import { Prompt } from "../utils/prompts";
import ThemeProvider from "./ThemeProvider";

function App() {
  const [promptsState, setPromptsState] = useState<Prompt[]>([]);

  useEffect(() => {
    getPrompts().then(setPromptsState);
  }, []);

  const addPrompt = () => {
    addNewPrompt().then(setPromptsState);
  };
  const remove = (id: string) => {
    removePrompt(id).then(setPromptsState);
  };

  const update = (data: Partial<Prompt>) => {
    updatePrompt(data).then(setPromptsState);
  };

  const set = (data: Prompt[]) => {
    setPromptsState(data);
    setPrompts(data).then(() => {});
  };

  return (
    <ThemeProvider>
      <main>
        <h1>ChatGpt Prompt Wizard 🪄</h1>
        <h6>v {__APP_VERSION__}</h6>
        <div className="editor-title">
          <h2>Edit your prompts</h2>
          <Button variant="outline" onClick={addPrompt} color="blue">
            Add
          </Button>
        </div>
        {promptsState?.length > 0 && (
          <PromptsAccordion
            data={promptsState}
            updatePrompt={update}
            removePrompt={remove}
            setPrompts={set}
          />
        )}
      </main>
    </ThemeProvider>
  );
}

export default App;
