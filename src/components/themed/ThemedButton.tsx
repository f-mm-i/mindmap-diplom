import {TouchableOpacity, StyleSheet, ViewStyle, TextStyle, StyleProp} from 'react-native';
import {ThemedView} from '@/src/components/themed/ThemedView';
import {ThemedText} from '@/src/components/themed/ThemedText';
import {useThemeColor} from '@/src/hooks/useThemeColor';
import {useState} from 'react';
import * as React from 'react';

interface ThemedButtonProps {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    pressedStyle?: StyleProp<ViewStyle>;
    themedTextStyle?: StyleProp<TextStyle>;
}

export default function ThemedButton(props: ThemedButtonProps) {
    const primaryColor = useThemeColor({}, 'primary');
    const pressedButtonColor = useThemeColor({}, 'pressedText');
    const [isPressed, setIsPressed] = useState(false);

    const styles = createStyle(primaryColor);

    return (
        <TouchableOpacity
            onPress={props.onPress}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            activeOpacity={0.8}
            style={[
                styles.button,
                isPressed && styles.pressedButton,
                props.style,
                isPressed && props.pressedStyle,
            ]}
        >
            <ThemedView lightColor={'transparent'} darkColor={'transparent'}>
                <ThemedText
                    type="button"
                    style={[styles.text, props.themedTextStyle, isPressed ? {color: pressedButtonColor} : {}]}
                >
                    {props.title}
                </ThemedText>
            </ThemedView>
        </TouchableOpacity>
    );
}

function createStyle(primaryColor: string) {
    return StyleSheet.create({
        button: {
            width: '70%',
            maxWidth: 400,
            minWidth: 250,
            borderColor: primaryColor,
            borderWidth: 2,
            paddingVertical: 12,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
        pressedButton: {
            borderColor: primaryColor,
            borderWidth: 2,
            backgroundColor: primaryColor,
        },
        text: {
            backgroundColor: 'transparent', // Убираем фон текста
        },
    });
}
