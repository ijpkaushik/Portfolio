import React, { createContext, useState } from "react";

import {
  greenThemeLight,
  greenThemeDark,
  bwThemeLight,
  bwThemeDark,
  blueThemeLight,
  blueThemeDark,
  redThemeLight,
  redThemeDark,
  orangeThemeLight,
  orangeThemeDark,
  purpleThemeLight,
  purpleThemeDark,
  pinkThemeLight,
  pinkThemeDark,
  yellowThemeLight,
  yellowThemeDark,
} from "../theme/theme";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState(greenThemeDark);
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const setHandleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const setHandleMode = () => {
    setDarkMode(!darkMode);
    darkMode ? setTheme(greenThemeDark) : setTheme(greenThemeLight);
  };

  const value = { theme, drawerOpen, setHandleDrawer, darkMode, setHandleMode };
  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
