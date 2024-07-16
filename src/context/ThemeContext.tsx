import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface ThemeContextProps {
  theme: 'light' | 'night';
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

const getInitialTheme = (): 'light' | 'night' => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'night' || storedTheme === 'light' ? storedTheme : 'night';
  };

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'night'>(getInitialTheme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'night' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;