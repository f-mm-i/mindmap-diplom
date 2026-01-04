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
    settings: DrawingSettings;
    onUpdateSettings: (settings: Partial<DrawingSettings>) => void;
}

const getBrushMenu = ({
    brushMenuAnimation,
    showBrushMenu,
    settings,
    onUpdateSettings
} : BrushMenuProps) => {
    const themeForeground = getTabIconColor();
    return <BrushMenu
        animationValue={brushMenuAnimation}
        isVisible={showBrushMenu}
    >
        <ColorPicker
            selectedColor={settings.color}
            onSelect={(color) => onUpdateSettings({color})}
            themeForeground={themeForeground}
        />
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
    const [showBrushMenu, setShowBrushMenu] = useState(false);
    const brushMenuAnimation = useRef(new Animated.Value(0)).current;
    const styles = createToolbarStyles();

    const toggleBrushMenu = (value: boolean = false) => {
        Animated.timing(brushMenuAnimation, {
            toValue: !value ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setShowBrushMenu(value);
    };

    return (
        <View style={styles.container} pointerEvents="box-none">
            <ToolButton
                icon="brush"
                tool="draw"
                selectedTool={selectedTool}
                onPress={() => {
                    if (selectedTool === "draw") {
                        toggleBrushMenu(!showBrushMenu);
                    } else {
                        onSelectTool("draw");
                    }
                }}
            />
            {getBrushMenu({brushMenuAnimation, showBrushMenu, settings, onUpdateSettings})}
            <ToolButton
                icon="trash-outline"
                tool="erase"
                selectedTool={selectedTool}
                onPress={() => {
                    toggleBrushMenu(false);
                    onSelectTool("erase");
                }}
            />
        </View>
    );
};

