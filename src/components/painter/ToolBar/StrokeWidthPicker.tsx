import { View, StyleSheet, Pressable } from "react-native";

const STROKE_WIDTHS = [2, 4, 6, 8, 10];

interface StrokeWidthPickerProps {
    selectedWidth: number;
    onSelect: (width: number) => void;
    themeForeground: string;
}

export const StrokeWidthPicker = ({
                                      selectedWidth,
                                      onSelect,
                                      themeForeground
                                  }: StrokeWidthPickerProps) => (
    <View style={styles.strokeWidthPicker}>
        {STROKE_WIDTHS.map((width, index) => (
            <Pressable
                key={index}
                style={[
                    styles.strokeWidthButton,
                    selectedWidth === width && styles.selectedStrokeButton
                ]}
                onPress={() => onSelect(width)}
            >
                <View style={[
                    styles.strokeWidthIndicator,
                    {
                        height: width,
                        backgroundColor: themeForeground
                    }
                ]}/>
            </Pressable>
        ))}
    </View>
);

const styles = StyleSheet.create({
    strokeWidthPicker: {
        alignItems: 'center',
        width: '100%',
    },
    strokeWidthButton: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 2,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    selectedStrokeButton: {
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    strokeWidthIndicator: {
        width: '80%',
        borderRadius: 4,
    }
});