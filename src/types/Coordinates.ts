import {GestureResponderEvent} from "react-native";

export type EventCoordinateExtractor = (event: GestureResponderEvent) => ({
    x: number;
    y: number
});