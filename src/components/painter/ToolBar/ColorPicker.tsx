import { View, StyleSheet, Pressable } from "react-native";

const DEFAULT_COLORS = ["#000000", "#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF", "#800080", "#FFFFFF"];

interface ColorPickerProps {
    selectedColor: string;
    onSelect: (color: string) => void;
    themeForeground: string;
}

export const ColorPicker = ({
                                selectedColor,
                                onSelect,
                                themeForeground
                            }: ColorPickerProps) => (
    <View style={styles.colorSection}>
        <View style={styles.colorGrid}>
            {DEFAULT_COLORS.map((color, index) => (
                <Pressable
                    key={index}
                    style={[
                        styles.colorButton,
                        { backgroundColor: color },
                        selectedColor === color && styles.selectedColor
                    ]}
                    onPress={() => onSelect(color)}
                />
            ))}
        </View>
    </View>
);

const styles = StyleSheet.create({
    colorSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingHorizontal: 8,
        width: '100%',
    },
    colorGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 8,
        width: '100%',
    },
    colorButton: {
        width: 28,
        height: 28,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
    },
    selectedColor: {
        borderWidth: 2,
        borderColor: '#fff',
    }
});