import {ToolType} from "@/src/types/Tools";
import {createToolbarStyles} from "@/src/components/painter/ToolBar/styles";
import {Pressable} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

type ToolButtonProps = {
    icon: keyof typeof Ionicons.glyphMap;
    tool: ToolType;
    selectedTool: ToolType;
    onPress: (tool: ToolType) => void;
}
export const ToolButton = ({
                               icon,
                               tool,
                               selectedTool,
                               onPress
                           }: ToolButtonProps) => {
    const styles = createToolbarStyles();
    const iconColor = selectedTool === tool ? "#000000" : "#686868";
    return <Pressable
        style={[styles.mainButton, selectedTool === tool && styles.active]}
        onPress={() => {
            console.log(tool);
            onPress(tool);
        }}
    >
        <Ionicons name={icon} size={24} color={iconColor}/>
    </Pressable>

};
