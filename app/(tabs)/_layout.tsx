import {Stack} from 'expo-router';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useColorScheme} from "@/src/hooks/useColorScheme";

export default function TabLayout() {
    console.log("TabLayout", useColorScheme());
    return (
        <View style={styles.container}>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="index"/>
                <Stack.Screen name="painter"/>
                <Stack.Screen name="auth"/>
            </Stack>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
