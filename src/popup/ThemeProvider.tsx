import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { useState, useEffect } from "react";
import { setPreferredTheme, getPreferredTheme } from "../utils/local-storage";
import { IconButton } from "./Icon";

const DarkThemeColorScheme = [
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
];

// ThemeProvider for dark and light theme
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme);

  useEffect(() => {
    getPreferredTheme().then((theme) => {
      if (theme && theme !== colorScheme) {
        setColorScheme(theme);
      }
    });
  }, []);

  const toggleColorScheme = () => {
    const newTheme = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(newTheme);
    setPreferredTheme(newTheme).then(() => {});
  };

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
            // @ts-ignore
            dark: DarkThemeColorScheme,
          },
        }}
      >
        <div className={colorScheme + "-theme"}>
          <div className="theme-switcher-buttons">
            <IconButton
              onClick={toggleColorScheme}
              name={colorScheme === "dark" ? "sun" : "moon"}
              alt="Toggle color scheme"
            />
          </div>
          {children}
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
