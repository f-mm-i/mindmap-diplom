import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

const QUICK_TOOL_TOP = 180;
const QUICK_TOOL_WIDTH = 230;
const QUICK_TOOL_HEIGHT = 44;
const QUICK_TOOL_RADIUS = 14;

const PANEL_SIDE_PADDING = 20;
const PANEL_TOP = 320;
const PANEL_RADIUS = 16;
const PANEL_PADDING = 16;

const COLOR_DOT_SIZE = 32;
const COLOR_DOT_RADIUS = 16;
const COLOR_DOT_GAP = 10;

const ICON_CARD_SIZE = 48;
const ICON_CARD_RADIUS = 10;
const ICON_ROW_GAP = 12;

const PALETTE_COLORS = [
    "#000000",
    "#FF3B30",
    "#F7B500",
    "#FFE600",
    "#34C759",
    "#007AFF",
    "#AF52DE",
    "#FF2D55",
];

const ICON_ITEMS = [
    {label: "дом", icon: "home-outline"},
    {label: "природа", icon: "leaf-outline"},
    {label: "пин", icon: "location-outline"},
    {label: "банк", icon: "business-outline"},
    {label: "фастфуд", icon: "fast-food-outline"},
    {label: "ТЦ", icon: "storefront-outline"},
    {label: "выставка", icon: "color-palette-outline"},
    {label: "парки", icon: "flower-outline"},
];

export const PainterOverlay = () => {
    return (
        <View style={styles.container} pointerEvents="box-none">
            <View style={styles.quickTools}>
                <View style={styles.quickToolItem}>
                    <Text style={styles.quickToolPlus}>+</Text>
                </View>
                <View style={[styles.quickToolDot, {backgroundColor: "#000000"}]}/>
                <View style={styles.quickToolLines}>
                    <View style={[styles.quickToolLine, {height: 10}]}/>
                    <View style={[styles.quickToolLine, {height: 14}]}/>
                    <View style={[styles.quickToolLine, {height: 18}]}/>
                </View>
                <View style={[styles.quickToolDot, {backgroundColor: "#8B8B8B"}]}/>
                <View style={[styles.quickToolDot, {backgroundColor: "#C2C2C2"}]}/>
            </View>

            <View style={styles.panel}>
                <View style={styles.searchRow}>
                    <Text style={styles.searchPlaceholder}>Я ищу...</Text>
                    <Ionicons name="search-outline" size={18} color="#A9A9B3"/>
                </View>
                <View style={styles.sectionRow}>
                    <Text style={styles.sectionLabel}>Добавить цвет:</Text>
                    <View style={styles.colorRow}>
                        {PALETTE_COLORS.map((color) => (
                            <View
                                key={color}
                                style={[
                                    styles.colorDot,
                                    {backgroundColor: color},
                                    color === "#FF3B30" && styles.colorDotSelected
                                ]}
                            />
                        ))}
                    </View>
                </View>
                <Text style={styles.sectionLabel}>Добавить иконку:</Text>
                <View style={styles.iconRow}>
                    {ICON_ITEMS.map((item) => (
                        <View key={item.label} style={styles.iconItem}>
                            <View style={styles.iconCard}>
                                <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={24} color="#EC3333"/>
                            </View>
                            <Text style={styles.iconLabel}>{item.label}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    },
    quickTools: {
        position: "absolute",
        top: QUICK_TOOL_TOP,
        alignSelf: "center",
        width: QUICK_TOOL_WIDTH,
        height: QUICK_TOOL_HEIGHT,
        borderRadius: QUICK_TOOL_RADIUS,
        backgroundColor: "#EBEDF0",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
    },
    quickToolItem: {
        width: 28,
        height: 28,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
    },
    quickToolPlus: {
        fontSize: 18,
        color: "#000000",
    },
    quickToolDot: {
        width: 18,
        height: 18,
        borderRadius: 9,
    },
    quickToolLines: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },
    quickToolLine: {
        width: 3,
        borderRadius: 2,
        backgroundColor: "#000000",
    },
    panel: {
        position: "absolute",
        top: PANEL_TOP,
        left: PANEL_SIDE_PADDING,
        right: PANEL_SIDE_PADDING,
        backgroundColor: "#EBEDF0",
        borderRadius: PANEL_RADIUS,
        padding: PANEL_PADDING,
    },
    searchRow: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        paddingHorizontal: 16,
        height: 36,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 12,
    },
    searchPlaceholder: {
        color: "#ACADB2",
        fontSize: 14,
    },
    sectionRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    sectionLabel: {
        color: "#000000",
        opacity: 0.6,
        fontSize: 14,
        marginRight: 12,
    },
    colorRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: COLOR_DOT_GAP,
        flexWrap: "wrap",
    },
    colorDot: {
        width: COLOR_DOT_SIZE,
        height: COLOR_DOT_SIZE,
        borderRadius: COLOR_DOT_RADIUS,
    },
    colorDotSelected: {
        borderWidth: 3,
        borderColor: "#007AFF",
    },
    iconRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: ICON_ROW_GAP,
        flexWrap: "wrap",
    },
    iconItem: {
        alignItems: "center",
        width: 56,
    },
    iconCard: {
        width: ICON_CARD_SIZE,
        height: ICON_CARD_SIZE,
        borderRadius: ICON_CARD_RADIUS,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
    },
    iconLabel: {
        marginTop: 6,
        fontSize: 11,
        color: "#000000",
        opacity: 0.7,
    },
});
