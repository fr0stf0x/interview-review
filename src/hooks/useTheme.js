import React, { useContext, useState, useEffect } from 'react';

const ThemeContext = React.createContext('light');

export const ThemeProvider = ({ children }) => {
  const [theme, changeTheme] = useState('light');

  useEffect(() => {
    const root = document.querySelector('body');

    root.className = `theme-${theme} bg-default text-default font-body`;

    return () => {
      root.classList.remove(theme);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, changeTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * @typedef {'light' | 'dark'} Theme
 */

/**
 * @param {Theme} theme
 */
export function useTheme() {
  /**
   * @type {[Theme, (theme: Theme) => {}]}
   */
  const [theme, changeTheme] = useContext(ThemeContext);

  return {
    theme,
    changeTheme,
  };
}
