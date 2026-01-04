import { StyleSheet } from "react-native";
import {getSecondBackgroundColor, getTabIconColor} from "@/src/components/painter/ToolBar/get_colors";

export const createToolbarStyles = () =>
    StyleSheet.create({
        container: {
            position: "absolute",
            top: 24,
            right: 16,
            alignItems: 'center',
            zIndex: 1000,
            shadowColor: "#000",
            borderRadius: 18,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            backgroundColor: getSecondBackgroundColor(),
            paddingVertical: 8,
            paddingHorizontal: 6,
            gap: 6,
        },
        mainButton: {
            width: 44,
            height: 44,
            borderRadius: 14,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 5,
        },
        active: {
            backgroundColor: "#FFFFFF",
        },
        brushMenu: {
            position: 'absolute',
            right: 70,
            top: 25,
            backgroundColor: getSecondBackgroundColor(),
            borderRadius: 12,
            padding: 12,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            zIndex: 1,
            width: 160,
        },
    });
