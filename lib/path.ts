import {VElement, h} from "velements";

export type PathOptions = {
    size?: number
    stroke?: string
    fill?: string
    strokeWidth?: string | number
    shapeRendering?: string
    path?: string
}

export function path(options: PathOptions): VElement
{
    options = options || {};
    const size = options.size || 20;
    const strokeWidth = options.strokeWidth || 2;
    const stroke = options.stroke || '#333';
    const fill = options.fill || 'transparent';
    const shapeRendering = options.shapeRendering || 'auto';
    const path = options.path || 'woven';
    return h('path', {
        stroke,
        fill,
        'stroke-width': strokeWidth,
        'shape-rendering': shapeRendering,
        'stroke-linecap': 'square',
        d: paths(size, path),
    });
}

export function paths(s: number, p): string
{
    const s2 = s / 2;
    const s4 = s / 4;
    const s8 = s / 8;
    const s34 = s * 3 / 4;
    const s38 = s * 3 / 8;
    const s54 = s * 5 / 4;
    switch (p)
    {
        case 'squares':
            return `M${s4},${s4}l${s2},0l0,${s2}l${-s2},0Z`;
        case 'nylon':
            return `M0,${s4}l${s4},0l0,${-s4}M${s34},${s}l0,${-s4}l${s4},0M${s4},${s2}l0,${s4}l${s4},0M${s2},${s4}l${s4},0l0,${s4}`;
        case 'waves':
            return `M0,${s2}c${s8},${-s4},${s38},${-s4},${s2},0c${s8},${s4},${s38},${s4},${s2},0M${-s2},${s2}c${s8},${s4},${s38},${s4},${s2},0M${s},${s2}c${s8},${-s4},${s38},${-s4},${s2},0`;
        case 'woven':
            return `M${s4},${s / 4}l${s2},${s2}M${s34},${s4}l${s2},${-s2}M${s4},${s34}l${-s2},${s2}M${s34},${s54}l${s2},${-s2} M${-s4},${s4}l${s2},${-s2}`;
        case 'crosses':
            return `M${s4},${s4}l${s2},${s2}M${s4},${s34}l${s2},${-s2}`;
        case 'caps':
            return `M${s4},${s34}l${s4},${-s2}l${s4},${s2}`;
        default:
            return p(s);
    }
}
