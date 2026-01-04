import { Colors } from '@/src/constants/Colors';
import {useColorScheme} from "@/src/hooks/useColorScheme";
import {useTheme} from "@/src/context/ThemeProvider";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const {theme} = useTheme();
  const colorFromProps = props[theme as "light" | "dark"];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme as "light" | "dark"][colorName];
  }
}