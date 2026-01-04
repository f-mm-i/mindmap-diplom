import {Text, type TextProps, StyleSheet} from 'react-native';
import {useThemeColor} from '@/src/hooks/useThemeColor';
import * as React from 'react';
import {RFValue} from "@/src/utils/responsive-fontsize/RFValue";

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'button';
};

export function ThemedText({
                               style,
                               lightColor,
                               darkColor,
                               type = 'default',
                               ...rest
                           }: ThemedTextProps) {
    const color = useThemeColor({light: lightColor, dark: darkColor}, 'text');

    return (
        <Text
            style={[
                {color},
                type === 'default' ? styles.default : undefined,
                type === 'title' ? styles.title : undefined,
                type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
                type === 'subtitle' ? styles.subtitle : undefined,
                type === 'link' ? styles.link : undefined,
                type === 'button' ? styles.button : undefined,
                style,
            ]}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    default: {
        fontSize: RFValue(12),
        fontWeight: '400',
        fontFamily: 'Inter_400Regular',
        backgroundColor: 'transparent',
    },
    button: {
        fontSize: RFValue(28),
        lineHeight: RFValue(42),
        fontFamily: 'Inter_400Regular',
        backgroundColor: 'transparent',
    },
    defaultSemiBold: {
        fontSize: RFValue(16),
        lineHeight: RFValue(24),
        fontWeight: '600',
        fontFamily: 'Inter_600SemiBold',
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: RFValue(27),
        fontWeight: '400',
        fontFamily: 'Inter_400Regular',
        backgroundColor: 'transparent',
    },
    subtitle: {
        fontSize: RFValue(16),
        fontWeight: '500',
        fontFamily: 'Inter_500Medium',
        backgroundColor: 'transparent',
    },
    link: {
        lineHeight: RFValue(30),
        fontSize: RFValue(16),
        color: '#0a7ea4',
        fontFamily: 'Inter_600SemiBold',
        backgroundColor: 'transparent',
    },
});
