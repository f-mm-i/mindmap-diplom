import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import * as React from 'react';
import {Inter_400Regular, Inter_500Medium, Inter_600SemiBold} from "@expo-google-fonts/inter";
import {ThemeProvider} from "@/src/context/ThemeProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
    });

    if (error) {
        console.error(error);
    }

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <ThemeProvider>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                    <Stack.Screen name="+not-found"/>
                </Stack>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
}
