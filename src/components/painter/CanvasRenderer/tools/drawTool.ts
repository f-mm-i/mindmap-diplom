import {CanvasElement} from "@/src/types/CanvasElement";
import {CanvasTool} from "@/src/components/painter/CanvasRenderer/tools/tools";
import {getEventCoordinates} from "@/src/utils/painter/getEventCoordinates";

export const DrawTool: CanvasTool = {
    handleStart: (event, context) => {
        const {x, y} = getEventCoordinates(event);
        const newElement: CanvasElement = {
            createdAt: Date.now(),
            id: Date.now().toString(),
            type: 'path',
            position: {x, y},
            path: {
                d: `M ${x},${y}`,
                color: context.settings.color,
                width: context.settings.width,
            }
        };
        context.setCurrentElement(newElement);
    },

    handleMove: (event, {currentElement, setCurrentElement, settings}) => {
        if (!currentElement) return;

        const {x, y} = getEventCoordinates(event);
        const updated = {
            ...currentElement,
            path: {
                ...currentElement.path!,
                d: `${currentElement.path!.d} L ${x},${y}`,
                color: settings.color,
                width: settings.width
            }
        };
        setCurrentElement(updated);
    },

    handleEnd: (_, {currentElement, setElements, setCurrentElement}) => {
        if (currentElement) {
            setElements(prev => [...prev, currentElement]);
        }
        setCurrentElement(null);
    }
};