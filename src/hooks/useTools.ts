import { useState, useCallback } from 'react';
import {ToolType} from "@/src/types/Tools";
import {CanvasTool} from "@/src/components/painter/CanvasRenderer/tools/tools";
import {DrawTool} from "@/src/components/painter/CanvasRenderer/tools/drawTool";
import {EraseTool} from "@/src/components/painter/CanvasRenderer/tools/eraseTool";

const TOOLS: Record<ToolType, CanvasTool> = {
    draw: DrawTool,
    erase: EraseTool,
    // text: null, TextTool, // Аналогичная реализация
    // image: null, ImageTool // Аналогичная реализация
};

export const useTools = (initialTool: ToolType = 'draw') => {
    const [selectedTool, setSelectedTool] = useState<ToolType>(initialTool);

    const selectTool = useCallback((tool: ToolType) => {
        setSelectedTool(tool);
    }, []);

    const getToolHandler = useCallback((toolType: ToolType) => {
        return TOOLS[toolType] || TOOLS.draw;
    }, []);

    return {
        selectedTool,
        selectTool,
        getToolHandler
    };
};