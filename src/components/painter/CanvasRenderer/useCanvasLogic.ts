import {useCallback, useEffect, useState} from 'react';
import {GestureResponderEvent} from 'react-native';
import {CanvasElement, CanvasElementNullable, CanvasElementType} from '@/src/types/CanvasElement';
import {loadInitialData, saveTimeout} from "@/src/components/painter/CanvasRenderer/save";
import {DrawingSettings} from "@/src/types/DrawingSettings";
import {useTools} from "@/src/hooks/useTools";
import {ToolContext} from "@/src/components/painter/CanvasRenderer/tools/tools";


export const useCanvasLogic = (initialType: CanvasElementType = 'path') => {
    const [elements, setElements] = useState<CanvasElement[]>([]);
    const [currentElement, setCurrentElement] = useState<CanvasElementNullable>(null);
    const [settings, setSettings] = useState<DrawingSettings>({
        color: '#FFFFFF',
        width: 4,
    });
    const { selectedTool, selectTool, getToolHandler } = useTools();

    const toolContext: ToolContext = {
        elements,
        currentElement,
        settings,
        setElements,
        setCurrentElement,
        updateSettings: useCallback((newSettings) => {
            setSettings(prev => ({...prev, ...newSettings}));
        }, [])
    };

    const currentTool = getToolHandler(selectedTool);

    const handleStart = useCallback((event: GestureResponderEvent) => {
        currentTool.handleStart(event, toolContext);
    }, [currentTool, toolContext]);

    const handleMove = useCallback((event: GestureResponderEvent) => {
        currentTool.handleMove(event, toolContext);
    }, [currentTool, toolContext]);

    const handleEnd = useCallback((event: GestureResponderEvent) => {
        currentTool.handleEnd(event, toolContext);
    }, [currentTool, toolContext]);
    useEffect(() => {
        loadInitialData(setElements);
    }, [setElements]);

    // Автосохранение при изменении элементов
    useEffect(() => {
        const timeoutId = saveTimeout(elements);
        return () => clearTimeout(timeoutId);
    }, [elements]);

    return {
        settings,
        updateSettings: toolContext.updateSettings,
        currentElement,
        elements,
        handleStart,
        handleMove,
        handleEnd,
        selectedTool,
        selectTool
    };
};