import {VElement, h} from "velements";
import {randomId} from "./randomId";

export type PatternOptions = {
    size?: number
    width?: number
    height?: number
    background?: string
    content: VElement | Array<VElement>
}

export function pattern(options: PatternOptions): VElement
{
    const size = options.size || 20;
    const width = options.width || size;
    const height = options.height || size;
    const content = Array.isArray(options.content) ? options.content : [options.content];
    const n = h('pattern',{
            id: randomId(),
            patternUnits: 'userSpaceOnUse',
            width,
            height,
        },
        ...content);
    if (options.background)
    {
        const bg = h('rect', {
            width,
            height,
            fill: options.background,
        });
        n.children.unshift(bg);
    }
    return n;
}
