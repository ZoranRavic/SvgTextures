import {VElement, h} from "velements";
import {pattern} from "./pattern";

export type CubeOptions = {
    size?: number
    left?: string
    right?: string
    background?: string
}

export function cubePattern(options: CubeOptions): VElement
{
    options = options || {};
    const size = options.size || 20;
    const left = options.left || 'rgba(0,0,0,.06)';
    const right = options.right || 'rgba(0,0,0,.12)';
    const n = pattern({
        width: size * .625,
        height: size,
        content: [
            h('g', { id: 'cube' },
                h('path', { fill: left, d: 'M0,0l5,3v5l-5,-3Z' }),
                h('path', { fill: right, d: 'M10,0l-5,3v5l5,-3' })),
            h('use', { x: 5, y: 8, href: '#cube' }),
            h('use', { x: -5, y: 8, href: '#cube' }),
        ],
        background: options.background
    });
    n.attrs.viewBox = '0 0 10 16';
    return n;
}
