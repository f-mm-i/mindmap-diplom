import React from "react";
import {FlatList, Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import {useRouter} from "expo-router"; // Import useRouter for navigation
import {ThemedView} from "@/src/components/themed/ThemedView";
import {ThemedText} from "@/src/components/themed/ThemedText";
import {useThemeColor} from "@/src/hooks/useThemeColor";

const {width, height} = Dimensions.get("window");
const CARD_MARGIN = 20;
const NUM_COLUMNS = 2; // Number of columns
const CARD_WIDTH = (width * 0.8 - CARD_MARGIN * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

const cardsData = [
    {title: "My Moscow", date: "позавчера"},
    {title: "Summer Berlin", date: "30 июня"},
    {title: "Exploring NY", date: "30 марта"},
    {title: "Mad Thai", date: "18 февраля"},
    {title: "Boston", date: "20 апреля 2023"},
];

export default function HomeScreen() {
    const styles = createStyles();
    const router = useRouter(); // Initialize the router for navigation

    const handleCardPress = () => {
        router.push("/painter"); // Navigate to the "painter" page
    };

    return (
        <ThemedView style={styles.containerMVP}>
            <ThemedText type="title" style={styles.welcomeText}>
                Добро пожаловать!
            </ThemedText>
            <TouchableOpacity onPress={handleCardPress} style={styles.card}>
                <ThemedView style={styles.cardContent}>
                    <ThemedText type="subtitle">Ментальная карта</ThemedText>
                </ThemedView>
            </TouchableOpacity>
            {/*<FlatList*/}
            {/*    data={cardsData}*/}
            {/*    numColumns={NUM_COLUMNS}*/}
            {/*    keyExtractor={(item, index) => index.toString()}*/}
            {/*    renderItem={({ item }) => (*/}
            {/*        <TouchableOpacity onPress={handleCardPress} style={styles.card}>*/}
            {/*            <ThemedView style={styles.cardContent}>*/}
            {/*                <ThemedText type="subtitle">{item.title}</ThemedText>*/}
            {/*                <ThemedText type="default">{item.date}</ThemedText>*/}
            {/*            </ThemedView>*/}
            {/*        </TouchableOpacity>*/}
            {/*    )}*/}
            {/*    contentContainerStyle={[styles.cardsContainer]}*/}
            {/*/>*/}
        </ThemedView>
    );
}

function createStyles() {
    const cardBackgroundColor = useThemeColor({}, "secondBackground");
    return StyleSheet.create({
        welcomeText: {
            textAlign: "center",
            marginVertical: 20,
        },
        card: {
            width: CARD_WIDTH,
            aspectRatio: 1.85,
            margin: CARD_MARGIN,
            borderRadius: 10,
            overflow: "hidden", // To ensure the background doesn't bleed
        },
        cardContent: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: cardBackgroundColor,
        },
        container: {
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            height: height,
            marginVertical: height * 0.05,
            paddingVertical: 16,
        },
        containerMVP: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: height,
            marginVertical: height * 0.05,
            paddingVertical: 16,
        },
        cardsContainer: {
            flexWrap: "wrap",
            marginLeft: width * 0.1,
            marginRight: width * 0.1,
            flex: 0,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
        },
    });
}
