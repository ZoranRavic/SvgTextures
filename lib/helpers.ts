import {VElement} from "velements";
import {svgRect} from "./svg";
import {pattern, PatternOptions} from "./pattern";
import {line, LineOptions} from "./line";
import {circle, circleComplement, CircleOptions} from "./circle";
import {path, PathOptions} from "./path";

export function patternLine(options: PatternOptions & LineOptions): VElement
{
    options = options || {} as any;
    options.content = line(options);
    return pattern(options);
}

export function patternCircle(options: PatternOptions & CircleOptions): VElement
{
    options = options || {} as any;
    options.content = circle(options);
    return pattern(options);
}

export function patternCircleComplement(options: PatternOptions & CircleOptions): VElement
{
    options = options || {} as any;
    options.content = circleComplement(options);
    return pattern(options);
}

export function patternLinePath(options: PatternOptions & PathOptions): VElement
{
    options = options || {} as any;
    options.content = path(options);
    return pattern(options);
}

export function svgRectPattern(options: PatternOptions): VElement
{
    return svgRect(pattern(options));
}

export function svgRectPatternLine(options: PatternOptions & LineOptions): VElement
{
    return svgRect(patternLine(options));
}

export function svgRectPatternCircle(options: PatternOptions & CircleOptions): VElement
{
    return svgRect(patternCircle(options));
}

export function svgRectPatternCircleComplement(options: PatternOptions & CircleOptions): VElement
{
    return svgRect(patternCircleComplement(options));
}

export function svgRectPatternPath(options: PatternOptions & PathOptions): VElement
{
    return svgRect(patternLinePath(options));
}
