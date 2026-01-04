/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#886484',
    pressedText: '#fff',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    primary: '#886484',
    card: '#F8F9FA',
    border: '#E5E5E5',
    notification: '#FF453A',
    secondBackground: '#f5f5f5',
  },
  dark: {
    text: '#ECEDEE',
    pressedText: '#ECEDEE',
    background: '#1A2037',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    primary: '#886484',
    card: '#2C2C2C',
    border: '#3A3A3A',
    notification: '#FF453A',
    secondBackground: '#2c3a66',
  },
};
