import { StyleSheet } from "react-native";
import {getSecondBackgroundColor, getTabIconColor} from "@/src/components/painter/ToolBar/get_colors";

export const createToolbarStyles = () =>
    StyleSheet.create({
        container: {
            position: "absolute",
            top: 20,
            right: 20,
            alignItems: 'flex-end',
            zIndex: 1000,
            shadowColor: "#000",
            borderRadius: 18,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            backgroundColor: getSecondBackgroundColor()
        },
        mainButton: {
            padding: 12,
            elevation: 5,
        },
        active: {
          backgroundColor: getTabIconColor(true)
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