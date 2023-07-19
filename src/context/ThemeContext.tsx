'use client';

import React, { useState, createContext, useMemo } from 'react';

export type ThemeContextType = {
  mode: 'light' | 'dark';
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  toggle: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<'dark' | 'light'>('dark');

  const toggle = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const valueTheme = useMemo(
    () => ({
      mode,
      toggle,
    }),
    [mode],
  );

  return (
    <ThemeContext.Provider value={valueTheme}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
