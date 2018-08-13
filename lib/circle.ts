import {VElement, h} from "velements";

export type CircleOptions = {
    size?: number
    radius?: number
    stroke?: string
    fill?: string
    strokeWidth?: string | number
}

export function circle(options: CircleOptions): VElement
{
    options = options || {};
    const size = options.size || 20;
    const radius = options.radius || 2;
    // const strokeWidth = options.strokeWidth;
    const fill = options.fill || '#333';
    // const stroke = options.stroke;
    return h('circle', {
        cx: size / 2,
        cy: size / 2,
        r: radius,
        fill,
        stroke: options.stroke,
        'stroke-width': options.strokeWidth,
    });
}

export function circleComplement(options: CircleOptions): Array<VElement>
{
    options = options || {};
    const size = options.size || 20;
    const radius = options.radius || 2;
    const strokeWidth = options.strokeWidth || 0;
    const stroke = options.stroke || '#333';
    const fill = options.fill || stroke;
    const circles: Array<VElement> = [];
    const positions = [[size / 2, size / 2], [0, 0], [0, size], [size, 0], [size, size]];
    for (let i = 0; i < positions.length; ++i)
    {
        const pos = positions[i];
        circles.push(h('circle', {
            cx: pos[0],
            cy: pos[1],
            r: radius,
            fill,
            stroke,
            'stroke-width': strokeWidth,
        }));
    }
    return circles;
}
