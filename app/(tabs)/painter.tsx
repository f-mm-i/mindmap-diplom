import {SafeAreaView, View} from 'react-native';
import {useRouter} from 'expo-router';
import {ThemedView} from "@/src/components/themed/ThemedView";
import {useCanvasLogic} from "@/src/components/painter/CanvasRenderer/useCanvasLogic";
import Header from "@/src/navigation/Header";
import {CanvasRenderer} from "@/src/components/painter/CanvasRenderer/CanvasRenderer";
import {Toolbar} from "@/src/components/painter/ToolBar/ToolBar";

export default function PainterScreen() {
    const router = useRouter();
    const {
        settings,
        updateSettings,
        elements,
        currentElement,
        handleStart,
        handleMove,
        handleEnd,
        selectedTool,
        selectTool,
    } = useCanvasLogic();

    return (
        <ThemedView style={{flex: 1}}>
            <Header title="Моя ментальная карта" onMenuPress={() => router.back()}/>
            <SafeAreaView style={{flex: 1}}>

                <View style={{flex: 1, position: 'relative'}}>
                    <View
                        style={{flex: 1}}
                        onTouchStart={handleStart}
                        onTouchMove={handleMove}
                        onTouchEnd={handleEnd}
                    >
                        <CanvasRenderer elements={[...elements, ...(currentElement ? [currentElement] : [])]}/>
                    </View>

                    <Toolbar
                        selectedTool={selectedTool}
                        onSelectTool={selectTool}
                        settings={settings}
                        onUpdateSettings={updateSettings}
                        // {/*={settings.color}*/}
                        // {/*onSelectColor={((color: string) => updateSettings({color}))}*/}
                        // {/*onSelectStrokeWidth={((width: number) => updateSettings({width}))}*/}
                    />
                </View>
            </SafeAreaView>
        </ThemedView>
    );
}