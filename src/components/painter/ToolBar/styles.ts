import { StyleSheet } from "react-native";

export const createToolbarStyles = () =>
    StyleSheet.create({
        container: {
            position: "absolute",
            top: 32,
            right: 16,
            alignItems: 'center',
            zIndex: 1000,
            borderRadius: 18,
            backgroundColor: "#EBEDF0",
            paddingVertical: 12,
            paddingHorizontal: 8,
            gap: 12,
        },
        mainButton: {
            width: 44,
            height: 44,
            borderRadius: 16,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 5,
            backgroundColor: "transparent",
        },
        active: {
            backgroundColor: "#FFFFFF",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowOpacity: 0.12,
            shadowRadius: 6,
        },
    });
