import { Animated, StyleSheet, View } from "react-native";
import React from "react";

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
    const styles = createStyles();

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

const createStyles = () =>
    StyleSheet.create({
        brushMenu: {
            position: 'absolute',
            right: 76,
            top: 12,
            backgroundColor: "#FFFFFF",
            borderRadius: 20,
            padding: 20,
            elevation: 5,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 0.16,
            shadowRadius: 14,
            zIndex: 1,
            width: 240,
        },
        brushMenuContent: {
            width: '100%',
        }
    });
