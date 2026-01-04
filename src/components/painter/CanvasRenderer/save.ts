import AsyncStorage from "@react-native-async-storage/async-storage";
import {CanvasElement} from "@/src/types/CanvasElement";

const storage = {
    async getItem(key: string) {
        return AsyncStorage.getItem(key);
    },
    async setItem(key: string, value: string) {
        return AsyncStorage.setItem(key, value);
    }
};

export const loadInitialData = async (setElements: (elements: CanvasElement[]) => void) => {
    try {
        const savedData = await storage.getItem('drawing');
        if (savedData) {
            const parsedElements = JSON.parse(savedData);
            setElements(parsedElements);
        }
    } catch (error) {
        console.error('Error loading initial drawing:', error);
    }
};

export const saveTimeout = (elements: CanvasElement[]) => {
    return setTimeout(async () => {
        try {
            await storage.setItem('drawing', JSON.stringify(elements));
            console.log('Auto-saved successfully');
        } catch (error) {
            console.error('Error auto-saving:', error);
        }
    }, 10);
};