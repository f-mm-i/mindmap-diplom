import {Animated, View} from "react-native";
import React, {useRef, useState} from "react";
import {BrushMenu} from "./BrushMenu";
import {ColorPicker} from "./ColorPicker";
import {StrokeWidthPicker} from "./StrokeWidthPicker";
import {createToolbarStyles} from "./styles";
import {getTabIconColor} from "@/src/components/painter/ToolBar/get_colors";
import {ToolType} from "@/src/types/Tools";
import {DrawingSettings} from "@/src/types/DrawingSettings";
import {ToolButton} from "@/src/components/painter/ToolBar/ToolButton";

interface ToolbarProps {
    selectedTool: ToolType;
    onSelectTool: (tool: ToolType) => void;
    settings: DrawingSettings;
    onUpdateSettings: (settings: Partial<DrawingSettings>) => void;
}

interface BrushMenuProps {
    brushMenuAnimation: Animated.Value;
    showBrushMenu: boolean;
    menuTool: ToolType | null;
    settings: DrawingSettings;
    onUpdateSettings: (settings: Partial<DrawingSettings>) => void;
}

const getBrushMenu = ({
    brushMenuAnimation,
    showBrushMenu,
    menuTool,
    settings,
    onUpdateSettings
} : BrushMenuProps) => {
    const themeForeground = getTabIconColor();
    return <BrushMenu
        animationValue={brushMenuAnimation}
        isVisible={showBrushMenu}
    >
        {menuTool === "draw" && (
            <ColorPicker
                selectedColor={settings.color}
                onSelect={(color) => onUpdateSettings({color})}
            />
        )}
        <StrokeWidthPicker
            selectedWidth={settings.width}
            onSelect={(width) => onUpdateSettings({width})}
            themeForeground={themeForeground}
        />
    </BrushMenu>;
}

export const Toolbar = ({
                            selectedTool,
                            onSelectTool,
                            settings,
                            onUpdateSettings,
                        }: ToolbarProps) => {
    const [menuTool, setMenuTool] = useState<ToolType | null>(null);
    const brushMenuAnimation = useRef(new Animated.Value(0)).current;
    const styles = createToolbarStyles();

    const toggleBrushMenu = (tool: ToolType | null) => {
        Animated.timing(brushMenuAnimation, {
            toValue: tool ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setMenuTool(tool);
    };

    const showBrushMenu = menuTool !== null;

    return (
        <View style={styles.container} pointerEvents="box-none">
            <ToolButton
                icon="pencil"
                tool="draw"
                selectedTool={selectedTool}
                onPress={() => {
                    if (selectedTool === "draw") {
                        toggleBrushMenu(menuTool === "draw" ? null : "draw");
                    } else {
                        onSelectTool("draw");
                        toggleBrushMenu("draw");
                    }
                }}
            />
            {getBrushMenu({brushMenuAnimation, showBrushMenu, menuTool, settings, onUpdateSettings})}
            <ToolButton
                icon="trash-outline"
                tool="erase"
                selectedTool={selectedTool}
                onPress={() => {
                    if (selectedTool === "erase") {
                        toggleBrushMenu(menuTool === "erase" ? null : "erase");
                    } else {
                        onSelectTool("erase");
                        toggleBrushMenu("erase");
                    }
                }}
            />
        </View>
    );
};
