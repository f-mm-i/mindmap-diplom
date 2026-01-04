import {Colors} from "./Colors";

export const lightTheme = {
    dark: false,
    colors: Colors['light'],
    fonts: {
        regular: {
            fontFamily: 'Inter_400Regular',
            fontWeight: '400' as const,
        },
        medium: {
            fontFamily: 'Inter_500Medium',
            fontWeight: '500' as const,
        },
        bold: {
            fontFamily: 'Inter_600SemiBold',
            fontWeight: '600' as const,
        },
        heavy: {
            fontFamily: 'Inter_700Bold',
            fontWeight: '700' as const,
        },
    },
};

export const darkTheme = {
    dark: true,
    colors: Colors['dark'],
    fonts: {
        regular: {
            fontFamily: 'Inter_400Regular',
            fontWeight: '400' as const,
        },
        medium: {
            fontFamily: 'Inter_500Medium',
            fontWeight: '500' as const,
        },
        bold: {
            fontFamily: 'Inter_600SemiBold',
            fontWeight: '600' as const,
        },
        heavy: {
            fontFamily: 'Inter_700Bold',
            fontWeight: '700' as const,
        },
    },
};
