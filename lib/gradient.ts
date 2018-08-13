import {VElement, h} from "velements";
import {randomId} from "./randomId";

export function diagonalGradient(colors: Array<string>): VElement
{
    return linearGradientAddColors(h('linearGradient', { id: randomId(), x2: 1, y2: 1 }), colors);
}

export function rdiagonalGradient(colors: Array<string>): VElement
{
    return linearGradientAddColors(h('linearGradient', { id: randomId(), x1: 1, x2: 0, y2: 1 }), colors);
}

export function verticalGradient(colors: Array<string>): VElement
{
    return linearGradientAddColors(h('linearGradient', { id: randomId(), x2: 0, y2: 1 }), colors);
}

export function horizontalGradient(colors: Array<string>): VElement
{
    return linearGradientAddColors(h('linearGradient', { id: randomId(), x2: 1, y2: 0 }), colors);
}

export function linearGradientAddColors(n: VElement, colors: Array<string>): VElement
{
    for (let i = 0; i < colors.length; ++i)
    {
        n.children.push(h('stop', i == 0 ?
            { 'stop-color': colors[i] } :
            { 'stop-color': colors[i], offset: (i / (colors.length - 1) * 100) + '%' }
        ));
    }
    return n;
}
