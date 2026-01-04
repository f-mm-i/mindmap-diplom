import React, {useState, useRef} from 'react';
import {View, Animated, StyleSheet, SafeAreaView} from 'react-native';
import HomeScreen from "@/src/components/HomeScreen/HomeScreen";
import SidebarMenu from "@/src/navigation/SidebarMenu";
import {ThemedView} from "@/src/components/themed/ThemedView";
import Header from "@/src/navigation/Header";

const MENU_WIDTH = 240;

export default function App() {
    const [menuVisible, setMenuVisible] = useState(false);
    const translateX = useRef(new Animated.Value(-MENU_WIDTH)).current;

    const toggleMenu = () => {
        Animated.timing(translateX, {
            toValue: menuVisible ? -MENU_WIDTH : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setMenuVisible(!menuVisible);
    };

    return (
        <ThemedView style={styles.container}>
            <View style={styles.container}>
                <SidebarMenu menuVisible={menuVisible} translateX={translateX} toggleMenu={toggleMenu}/>
                <View style={styles.content}>
                    <Header
                        title="Моя ментальная карта"
                        onMenuPress={toggleMenu}
                    />
                    <HomeScreen/>
                </View>
            </View>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    content: {
        flex: 1,
        zIndex: 1,
    },
});
