import {VElement, h} from "velements";
import {pattern} from "./pattern";

export type HexagonOptions = {
    size?: number
    stroke?: string
    fill?: string
    strokeWidth?: string | number
    shapeRendering?: string
    background?: string
}

export function hexagonPattern(options: HexagonOptions): VElement
{
    options = options || {};
    const s = options.size || 20;
    const strokeWidth = options.strokeWidth || 2;
    const stroke = options.stroke || '#333';
    const fill = options.fill || 'transparent';
    const shapeRendering = options.shapeRendering || 'auto';
    const sqrt3 = Math.sqrt(3);
    const s2 = s / 2;
    const s3s = s * 3;
    const ss32 = s * sqrt3 / 2;
    return pattern({
        width: s * 3,
        height: s * sqrt3,
        content: h('path', {
            stroke,
            fill,
            'stroke-width': strokeWidth,
            'shape-rendering': shapeRendering,
            'stroke-linecap': 'square',
            d: `M${s},0l${s},0l${s2},${(ss32)}l${(-s2)},${(ss32)}l${(-s)},0l${(-s2)},${(-ss32)}ZM0,${ss32}l${s2},0M${(s3s)},${ss32}l${(-s2)},0`,
        }),
        background: options.background
    });
}
