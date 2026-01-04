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
    const backgroundColor = useThemeColor({}, "background");
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
                            outputRange: [120, 0]
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
            right: 72,
            top: 6,
            backgroundColor: backgroundColor,
            borderRadius: 22,
            padding: 18,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 8 },
            shadowOpacity: 0.18,
            shadowRadius: 12,
            zIndex: 1,
            width: 210,
        },
        brushMenuContent: {
            width: '100%',
        }
    });
