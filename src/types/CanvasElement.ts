export type CanvasElementType = 'path' | 'text' | 'image' | 'media';

export type CanvasElement = {
    id: string;
    type: CanvasElementType;
    position: { x: number; y: number };
    createdAt: number;
    // Специфичные для типа данные
    path?: {
        d: string;
        color: string;
        width: number;
    };
    text?: {
        content: string;
        fontSize: number;
        fontFamily: string;
        color: string;
    };
    image?: {
        uri: string;
        width: number;
        height: number;
    };
};

export type CanvasElementNullable = CanvasElement | null;