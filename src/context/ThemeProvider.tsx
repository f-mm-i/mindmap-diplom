import React, { createContext, useContext, useState } from 'react';
import { useColorScheme as useDefaultColorScheme } from 'react-native';

const ThemeContext = createContext({
    theme: 'light', // Default theme
    toggleTheme: () => {}, // Default toggle function
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const systemTheme = useDefaultColorScheme() ?? 'light';
    const [theme, setTheme] = useState(systemTheme);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
