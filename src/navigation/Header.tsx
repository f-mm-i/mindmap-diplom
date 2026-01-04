import React from "react";
import {View, StyleSheet, TouchableOpacity, SafeAreaView} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {ThemedText} from "@/src/components/themed/ThemedText";
import {useThemeColor} from "@/src/hooks/useThemeColor";
import {useTheme} from "@/src/context/ThemeProvider";

interface HeaderProps {
    title: string;
    onMenuPress: () => void;
    showSettings?: boolean;
}

const Header: React.FC<HeaderProps> = ({title, onMenuPress, showSettings = false}) => {
    const {theme, toggleTheme} = useTheme();
    const iconColor = useThemeColor({}, "icon");
    const iconName = theme === "light" ? "moon-outline" : "sunny-outline";
    const styles = createStyles();
    return (
        <View style={styles.headerBackgroundFiller}>
            <SafeAreaView style={styles.headerContainer}>
                <TouchableOpacity onPress={onMenuPress} style={styles.iconButton}>
                    <Ionicons name="arrow-back" size={24} color={iconColor}/>
                </TouchableOpacity>
                <ThemedText type="title" style={styles.title}>{title}</ThemedText>
                <View style={styles.rightIcons}>
                    <TouchableOpacity onPress={toggleTheme} style={styles.iconButton}>
                        <Ionicons name={iconName} size={24} color={iconColor}/>
                    </TouchableOpacity>
                    {showSettings && (
                        <TouchableOpacity style={styles.iconButton}>
                            <Ionicons name="settings-outline" size={24} color={iconColor}/>
                        </TouchableOpacity>
                    )}
                </View>
            </SafeAreaView>
        </View>
    );
};

function createStyles() {
    const background = useThemeColor({}, "secondBackground");
    return StyleSheet.create({
        headerBackgroundFiller: {
            backgroundColor: background,
        },
        headerContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingVertical: 12,
        },
        iconButton: {
            padding: 8,
        },
        title: {
            fontSize: 18,
            fontWeight: "600",
        },
        rightIcons: {
            flexDirection: "row",
            alignItems: "center",
        },
    });
}

export default Header;
