import { Animated, StyleSheet, View } from "react-native";
import React from "react";
import { useThemeColor } from "@/src/hooks/useThemeColor";

interface BrushMenuProps {
    animationValue: Animated.Value;
    isVisible: boolean;
    children: React.ReactNode;
}

export const BrushMenu = ({
                              animationValue,
                              isVisible,
                              children
                          }: BrushMenuProps) => {
    const backgroundColor = useThemeColor({}, "secondBackground");
    const styles = createStyles(backgroundColor);

    return (
        <Animated.View
            style={[
                styles.brushMenu,
                {
                    opacity: animationValue,
                    transform: [{
                        translateX: animationValue.interpolate({
                            inputRange: [0, 1],
                            outputRange: [100, 0]
                        })
                    }]
                }
            ]}
            pointerEvents={isVisible ? 'auto' : 'none'}
        >
            <View style={styles.brushMenuContent}>
                {children}
            </View>
        </Animated.View>
    );
};

const createStyles = (backgroundColor: string) =>
    StyleSheet.create({
        brushMenu: {
            position: 'absolute',
            right: 70,
            top: 0,
            backgroundColor: backgroundColor,
            borderRadius: 12,
            padding: 12,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            zIndex: 1,
            width: 160,
        },
        brushMenuContent: {
            width: '100%',
        }
    });