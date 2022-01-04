import type { CSSObject as CSSObjectStandard } from "./tools/types/CSSObject";
import type { CSSInterpolation } from "./tools/types/CSSObject";
export { CSSInterpolation };
export declare type CSSObjectTssSpecials = {
    /** Property for tss-react that enable to select children by class name */
    ref?: string;
};
export interface CSSObject extends CSSObjectStandard, CSSObjectTssSpecials {
}
export interface Css {
    (template: TemplateStringsArray, ...args: CSSInterpolation[]): string;
    (...args: CSSInterpolation[]): string;
}
import { CxArg } from "./tools/classnames";
export { CxArg };
export declare type Cx = (...classNames: CxArg[]) => string;
export declare function matchCSSObject(arg: TemplateStringsArray | CSSInterpolation): arg is CSSObject;
