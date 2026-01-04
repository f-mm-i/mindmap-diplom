export interface Point {
    x: number;
    y: number;
}

export interface EraseZone extends Point {
    radius: number;
}
interface PathCommand {
    type: string;
    args: number[];
}

export function isPointInEraseZone(
    zone: EraseZone,
    pathData: string,
    pathWidth: number
): boolean {
    const commands = parsePathData(pathData);
    let currentPoint: Point = { x: 0, y: 0 };

    for (const command of commands) {
        if (command.type === 'M') {
            currentPoint = { x: command.args[0], y: command.args[1] };
        }
        else if (command.type === 'L') {
            const prevPoint = { ...currentPoint };
            currentPoint = { x: command.args[0], y: command.args[1] };

            if (isNearLine(zone, prevPoint, currentPoint, pathWidth)) {
                return true;
            }
        }
    }
    return false;
}

function parsePathData(pathData: string): PathCommand[] {
    const commands: PathCommand[] = [];
    const tokens = pathData
        .replace(/([A-Za-z])/g, ' $1 ')
        .split(/[ ,]+/)
        .filter(t => t !== '');

    let i = 0;
    while (i < tokens.length) {
        const type = tokens[i++];
        const args: number[] = [];

        while (i < tokens.length && !isNaN(parseFloat(tokens[i]))) {
            args.push(parseFloat(tokens[i++]));
        }

        commands.push({ type, args });
    }

    return commands;
}

function isNearLine(
    zone: EraseZone,
    p1: Point,
    p2: Point,
    lineWidth: number
): boolean {
    // Проверка нулевой длины линии
    if (p1.x === p2.x && p1.y === p2.y) {
        return distanceBetweenPoints(zone, p1) <= zone.radius + lineWidth/2;
    }

    const dist = distanceToLine(zone, p1, p2);
    return dist <= zone.radius + lineWidth/2;
}

function distanceBetweenPoints(a: Point, b: Point): number {
    return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2);
}

function distanceToLine(point: Point, lineStart: Point, lineEnd: Point): number {
    const A = point.x - lineStart.x;
    const B = point.y - lineStart.y;
    const C = lineEnd.x - lineStart.x;
    const D = lineEnd.y - lineStart.y;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;

    // Обработка нулевой длины линии
    if (lenSq === 0) return distanceBetweenPoints(point, lineStart);

    const param = Math.max(0, Math.min(1, dot / lenSq));

    const projX = lineStart.x + param * C;
    const projY = lineStart.y + param * D;

    return distanceBetweenPoints(point, { x: projX, y: projY });
}