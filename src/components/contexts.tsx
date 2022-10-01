import React, { createContext, useContext } from 'react';
import { useColorMode } from 'theme-ui';

export function useThemeState() {
  const value = useContext(ColorThemeContext);
  if (value === undefined) {
    throw new Error('useThemeState should be used within ThemeProvider');
  }
  return value;
}

const ColorThemeContext = createContext({} as ReturnType<typeof useColorMode>);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const colorModeState = useColorMode();
  return (
    <ColorThemeContext.Provider value={colorModeState}>
      {children}
    </ColorThemeContext.Provider>
  );
}
