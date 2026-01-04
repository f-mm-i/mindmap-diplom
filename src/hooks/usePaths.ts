import { useCallback, useState } from 'react';

export interface PathData {
    id: string;
    d: string;
    color: string;
    width: number;
    isEraser?: boolean;
}

export const usePaths = () => {
    const [paths, setPaths] = useState<PathData[]>([]);
    const [currentPath, setCurrentPath] = useState<Omit<PathData, 'id'> | null>(null);

    const startPath = useCallback((startPoint: { x: number; y: number }, color: string, width: number) => {
        setCurrentPath({
            d: `M ${startPoint.x} ${startPoint.y}`,
            color,
            width,
        });
    }, []);

    const updatePath = useCallback((point: { x: number; y: number }) => {
        setCurrentPath(prev => {
            if (!prev) return null;
            return { ...prev, d: `${prev.d} L ${point.x} ${point.y}` };
        });
    }, []);

    const endPath = useCallback(() => {
        setPaths(prev => {
            if (!currentPath) return prev;
            return [...prev, { ...currentPath, id: Date.now().toString() }];
        });
        setCurrentPath(null);
    }, [currentPath]);

    const deletePaths = useCallback((predicate: (path: PathData) => boolean) => {
        setPaths(prev => prev.filter(p => !predicate(p)));
    }, []);

    return {
        paths,
        currentPath,
        startPath,
        updatePath,
        endPath,
        deletePaths,
        setPaths,
        setCurrentPath,
    };
};