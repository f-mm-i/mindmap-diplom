import { useThemeColor } from "@/src/hooks/useThemeColor";

export const getSecondBackgroundColor = () => {
    return useThemeColor({}, "secondBackground");
};

export const getTabIconColor = (selected: boolean = false) => {
    return selected ? useThemeColor({}, "tabIconSelected") : useThemeColor({}, "tabIconDefault");
};