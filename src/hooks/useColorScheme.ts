import { useTheme } from '@/src/context/ThemeProvider';

export const useColorScheme = () => {
    const { theme } = useTheme();
    return theme;
};
