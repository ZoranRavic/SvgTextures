import {VElement, h} from "velements";
import {pattern} from "./pattern";

export type SquareOptions = {
    size?: number
    fill?: string
    background?: string
}

export function squarePattern(options: SquareOptions): VElement
{
    options = options || {};
    const size = options.size || 20;
    const fill = options.fill || '#333';
    const halfSize = size / 2;
    const content = [];
    if (options.background)
    {
        content.push(h('rect', { fill: options.background, width: size, height: size }));
    }
    content.push(
        h('rect', { fill: fill, width: halfSize, height: halfSize }),
        h('rect', { fill: fill, width: halfSize, height: halfSize, x: halfSize, y: halfSize }),
    );
    return pattern({
        width: size,
        height: size,
        content,
    });
}

export type DiagonalSquareOptions = {
    size?: number
    fill?: string
    background?: string
}

export function diagonalSquarePattern(options: DiagonalSquareOptions): VElement
{
    options = options || {};
    const size = options.size || 20;
    const fill = options.fill || '#333';
    const diagonalSize = size * .707;
    const content = [];
    if (options.background)
    {
        content.push(h('rect', { fill: options.background, width: size, height: size }));
    }
    content.push(
        h('rect', { fill: fill, width: diagonalSize, height: diagonalSize, transform: `translate(${size / 2} 0) rotate(45)` }),
    );
    return pattern({
        width: size,
        height: size,
        content,
    });
}
