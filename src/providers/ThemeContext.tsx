import { createContext, ReactNode, useEffect, useState } from "react";
import { Theme } from "../types";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedTheme = window.localStorage.getItem("theme");

    if (typeof storedTheme === "string") {
      return storedTheme as Theme;
    }

    const userTheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (userTheme.matches) {
      return "dark";
    }
  }
  return "light";
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeProvider = ({
  initialTheme,
  children,
}: {
  initialTheme: "light" | "dark";
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = (theme: any) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  };

  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
