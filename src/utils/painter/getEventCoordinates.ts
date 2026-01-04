import {GestureResponderEvent} from "react-native";

export const getEventCoordinates = (event: GestureResponderEvent) => {
    if (event.nativeEvent.locationX !== undefined) {
        return {
            x: event.nativeEvent.locationX,
            y: event.nativeEvent.locationY
        };
    }

    const touchEvent = event.nativeEvent as unknown as TouchEvent;
    if (touchEvent.touches?.[0]) {
        const rect = (event.target as unknown as Element).getBoundingClientRect();
        return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
        };
    }

    return {x: 0, y: 0};
};