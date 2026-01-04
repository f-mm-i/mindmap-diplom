import {ToolType} from "@/src/types/Tools";
import {createToolbarStyles} from "@/src/components/painter/ToolBar/styles";
import {Pressable} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {getTabIconColor} from "@/src/components/painter/ToolBar/get_colors";
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
    return <Pressable
        style={[styles.mainButton, selectedTool === tool && styles.active]}
        onPress={() => {
            console.log(tool);
            onPress(tool);
        }}
    >
        <Ionicons name={icon} size={28} color={getTabIconColor(selectedTool == tool)}/>
    </Pressable>

};
