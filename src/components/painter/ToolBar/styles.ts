import { StyleSheet } from "react-native";
import {getSecondBackgroundColor, getTabIconColor} from "@/src/components/painter/ToolBar/get_colors";

export const createToolbarStyles = () =>
    StyleSheet.create({
        container: {
            position: "absolute",
            top: 28,
            right: 14,
            alignItems: 'center',
            zIndex: 1000,
            shadowColor: "#000",
            borderRadius: 20,
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.15,
            shadowRadius: 10,
            backgroundColor: "#F4F4F4",
            paddingVertical: 10,
            paddingHorizontal: 6,
            gap: 8,
        },
        mainButton: {
            width: 42,
            height: 42,
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 5,
            backgroundColor: "transparent",
        },
        active: {
            backgroundColor: "#FFFFFF",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.08,
            shadowRadius: 4,
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
