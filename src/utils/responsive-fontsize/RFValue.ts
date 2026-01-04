// src/utils/responsiveFont.ts
import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const scale = SCREEN_WIDTH / 500;

export function RFValue(fontSize: number, standardScreenWidth: number = 500) {
    const newSize = fontSize * scale;
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
