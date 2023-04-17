import "./Popup.css";
import { useEffect, useState } from "react";
import {
  addNewPrompt,
  getPreferredTheme,
  getPrompts,
  removePrompt,
  setPreferredTheme,
  setPrompts,
  updatePrompt,
} from "../utils/local-storage";
import { PromptsAccordion } from "./Accordion";
import {
  Button,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { Prompt } from "../utils/prompts";
import { useColorScheme } from "@mantine/hooks";
import { IconButton } from "./Icon";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);

  const isDarkTheme = colorScheme === "dark";
  const toggleColorScheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setColorScheme(newTheme);
    setPreferredTheme(newTheme).then(() => {});
  };

  useEffect(() => {
    getPreferredTheme().then((theme) => {
      if (theme && theme !== colorScheme) {
        setColorScheme(theme);
      }
    });
  }, []);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withCSSVariables
        theme={{
          colorScheme: colorScheme,
          colors: {
            dark: [
              "#d5d7e0",
              "#acaebf",
              "#8c8fa3",
              "#666980",
              "#4d4f66",
              "#34354a",
              "#343541",
              "#2a2b33",
              "#0c0d21",
              "#01010a",
            ],
          },
        }}
      >
        <div className={colorScheme + "-theme"}>
          <div className="theme-switcher-buttons">
            {isDarkTheme && (
              <IconButton
                onClick={toggleColorScheme}
                name="sun"
                alt="Toggle color scheme"
              />
            )}
            {!isDarkTheme && (
              <IconButton
                onClick={toggleColorScheme}
                name="moon"
                alt="Toggle color scheme"
              />
            )}
          </div>
          {children}
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

function App() {
  const [promptsState, setPromptsState] = useState<Prompt[]>([]);

  useEffect(() => {
    getPrompts().then((prompts) => {
      setPromptsState(prompts);
    });
  }, []);

  const addPrompt = () => {
    addNewPrompt().then((prompts) => {
      setPromptsState(prompts);
    });
  };
  const remove = (id: string) => {
    removePrompt(id).then((prompts) => {
      setPromptsState(prompts);
    });
  };

  const update = (data: Partial<Prompt>) => {
    updatePrompt(data).then((prompts) => {
      setPromptsState(prompts);
    });
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

// chrome-extension://affnpgjnnjpbnbbeeffbnbgngapdlihf/popup.html
