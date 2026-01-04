import {GestureResponderEvent} from "react-native";
import {CanvasElement, CanvasElementNullable} from "@/src/types/CanvasElement";
import {DrawingSettings} from "@/src/types/DrawingSettings";

export interface CanvasTool {
    handleStart: (event: GestureResponderEvent, context: ToolContext) => void;
    handleMove: (event: GestureResponderEvent, context: ToolContext) => void;
    handleEnd: (event: GestureResponderEvent, context: ToolContext) => void;
}

export interface ToolContext {
    elements: CanvasElement[];
    currentElement: CanvasElementNullable;
    settings: DrawingSettings;
    setElements: React.Dispatch<React.SetStateAction<CanvasElement[]>>;
    setCurrentElement: (element: CanvasElementNullable) => void;
    updateSettings: (settings: Partial<DrawingSettings>) => void;
}