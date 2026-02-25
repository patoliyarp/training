export type themeMode = "light" | "dark";

export interface Theme {
  theme: themeMode;
}

export type Action = { type: "ToggleTheme" };

export interface ThemeContextType {
  theme: Theme;
  dispatch: React.Dispatch<Action>;
  ToggleTheme: () => void;
}
