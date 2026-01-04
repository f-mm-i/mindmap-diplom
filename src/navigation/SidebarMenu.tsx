import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Animated, Pressable, Dimensions} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useThemeColor} from "@/src/hooks/useThemeColor";
import {ThemedText} from "@/src/components/themed/ThemedText";

const SCREEN_WIDTH = Dimensions.get('window').width;
const MENU_WIDTH = 240;

interface SidebarMenuProps {
    menuVisible: boolean;
    translateX: Animated.Value;
    toggleMenu: () => void;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({menuVisible, translateX, toggleMenu}) => {

    const menuItems: { name: keyof typeof Ionicons.glyphMap; text: string; onPress: () => void }[] = [
        {name: 'home-outline', text: 'Главная', onPress: toggleMenu},
        // {name: 'school-outline', text: 'Обучение', onPress: toggleMenu},
    ];

    const iconColor = useThemeColor({}, 'icon');
    const styles = createStyles();

    return (
        <>
            {menuVisible && <Pressable style={styles.overlay} onPress={toggleMenu}/>}
            <Animated.View style={[styles.menu, {transform: [{translateX}]}]}>
                <View style={styles.divider}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.drawerItem} onPress={item.onPress}>
                            <Ionicons name={item.name} size={24} color={iconColor}/>
                            <ThemedText type='default' style={styles.drawerText}>{item.text}</ThemedText>
                        </TouchableOpacity>
                    ))}
                </View>
            </Animated.View>
        </>
    );
};

function createStyles() {
    const backgroundColor = useThemeColor({}, 'background');
    return StyleSheet.create({
        menu: {
            position: 'absolute',
            width: MENU_WIDTH,
            height: '100%',
            backgroundColor: backgroundColor,
            shadowColor: '#000',
            shadowOffset: {width: 2, height: 0},
            shadowOpacity: 0.2,
            shadowRadius: 4,
            paddingTop: 40,
            zIndex: 100,
        },
        overlay: {
            position: 'absolute',
            width: SCREEN_WIDTH,
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 99,
        },
        drawerHeader: {
            padding: 16,
            alignItems: 'center',
        },
        avatar: {
            width: 64,
            height: 64,
            borderRadius: 32,
            backgroundColor: '#007bff',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
        },
        avatarText: {
            fontSize: 24,
            fontWeight: 'bold',
        },
        drawerItem: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 16,
        },
        drawerText: {
            marginLeft: 16,
        },
        divider: {
            flex: 1,
            justifyContent: 'space-between',
            marginBottom: 16,
        }
    });
}

export default SidebarMenu;
