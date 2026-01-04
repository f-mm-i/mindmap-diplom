import {CanvasTool, ToolContext} from "@/src/components/painter/CanvasRenderer/tools/tools";
import {getEventCoordinates} from "@/src/utils/painter/getEventCoordinates";
import {isPointInEraseZone} from "@/src/utils/painter/eraseUtils";
import {GestureResponderEvent} from "react-native";

export const EraseTool: CanvasTool = {
    handleStart: (event, context) => handleErase(event, context),
    handleMove: (event, context) => handleErase(event, context),
    handleEnd: () => {},
};

const handleErase = (event: GestureResponderEvent, {setElements}: ToolContext) => {
    const {x, y} = getEventCoordinates(event);
    setElements(prev =>
        prev.filter(element =>
            element.type !== 'path' ||
            !isPointInEraseZone(
                {x, y, radius: 20},
                element.path!.d,
                element.path!.width
            )
        )
    );
}