import {VElement, h} from "velements";

export type LineOptions = {
    size?: number
    stroke?: string
    strokeWidth?: string | number
    shapeRendering?: string
    orientation?: string
}

export function line(options: LineOptions): VElement
{
    options = options || {};
    const size = options.size || 20;
    const strokeWidth = options.strokeWidth || 2;
    const stroke = options.stroke || '#333';
    const shapeRendering = options.shapeRendering || 'auto';
    const orientation = options.orientation || 'diagonal';
    return h('path', {
        stroke,
        'stroke-width': strokeWidth,
        'shape-rendering': shapeRendering,
        'stroke-linecap': 'square',
        d: linePath(size, orientation),
    });
}

export function linePath(s: number, orientation)
{
    const s2 = s / 2;
    const s4 = s / 4;
    const s34 = s * 3 / 4;
    const s54 = s * 5 / 4;
    switch (orientation)
    {
        case '0/8':
        case 'vertical':
            return `M${s2},0l0,${s}`;
        case '1/8':
            return `M${s4},0l${s2},${s}M${-s4},0l${s2},${s}M${s34},0l${s2},${s}`;
        case '2/8':
        case 'diagonal':
            return `M0,${s}l${s},${-s}M${-s4},${s4}l${s2},${-s2}M${s34},${s54}l${s2},${-s2}`;
        case '3/8':
            return `M0,${s34}l${s},${-s2}M0,${s4}l${s},${-s2}M0,${s54}l${s},${-s2}`;
        case '4/8':
        case 'horizontal':
            return `M0,${s2}l${s},0`;
        case '5/8':
            return `M0,${-s4}l${s},${s2}M0,${s4}l${s},${s2}M0,${s34}l${s},${s2}`;
        case '6/8':
            return `M0,0l${s},${s}M${-s4},${s34}l${s2},${s2} M ${s34},${-s4}l${s2},${s2}`;
        case '7/8':
            return `M${-s4},0l${s2},${s}M${s4},0l${s2},${s}M${s34},0l${s2},${s}`;
        default:
            return `M${s2},0l0,${s}`;
    }
}
