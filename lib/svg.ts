import {VElement, h} from "velements";

export type SvgOptions = {
    defs: VElement | Array<VElement>
    content: VElement | Array<VElement>
}

export function svg(options: SvgOptions): VElement
{
    return h('svg', null,
        h('defs', null, options.defs),
        options.content);
}

export function svgRect(...patterns: Array<VElement>): VElement
{
    return h('svg', null,
        h('defs', null, patterns),
        patterns.map(p =>
            h('rect', {
                fill: `url(#${p.attrs.id})`,
                x: 0,
                y: 0,
                height: '100%',
                width: '100%',
            })
        )
    );
}
