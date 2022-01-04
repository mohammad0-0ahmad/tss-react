/// <reference types="react" />
export type { CSSInterpolation, CSSObject, Css, Cx, CxArg } from "./types";
export { useCssAndCx } from "./cssAndCx";
import { createMakeStyles } from "./makeStyles";
export { createMakeStyles };
import { createWithStyles } from "./withStyles_compat";
export { createWithStyles };
/** Reexport from @emotion/react */
export { keyframes } from "@emotion/react";
export { GlobalStyles } from "./GlobalStyles";
export { getTssDefaultEmotionCache, TssCacheProvider } from "./cache";
export declare function createMakeAndWithStyles<Theme>(params: {
    useTheme: () => Theme;
}): {
    withStyles: <C extends keyof import("react").ReactHTML | import("./tools/ReactComponent").ReactComponent<any>, Props extends C extends import("./tools/ReactComponent").ReactComponent<infer P> ? P : C extends keyof import("react").ReactHTML ? import("react").ReactHTML[C] extends import("./tools/ReactComponent").ReactComponent<infer P_1> ? NonNullable<P_1> : never : never, CssObjectByRuleName extends Props extends {
        classes?: Partial<infer ClassNameByRuleName> | undefined;
    } ? { [RuleName in keyof ClassNameByRuleName]?: import("./types").CSSObject | undefined; } : {
        root: import("./types").CSSObject;
    }>(Component: C, cssObjectByRuleNameOrGetCssObjectByRuleName: CssObjectByRuleName | ((theme: Theme, props: Props, classes: Record<keyof CssObjectByRuleName, string>) => CssObjectByRuleName), params?: {
        name?: string | Record<string, unknown> | undefined;
    } | undefined) => C extends keyof import("react").ReactHTML ? import("react").ReactHTML[C] : C;
    makeStyles: <ParamsType = void, RuleNameSubsetReferencableInNestedSelectors extends string = never>(params?: {
        name?: string | Record<string, unknown> | undefined;
    } | undefined) => <Params = ParamsType, RuleName_1 extends string = string>(cssObjectByRuleNameOrGetCssObjectByRuleName: Record<RuleName_1, import("./types").CSSObject> | ((theme: Theme, params: Params, classes: Record<RuleNameSubsetReferencableInNestedSelectors, string>) => Record<RuleNameSubsetReferencableInNestedSelectors | RuleName_1, import("./types").CSSObject>)) => (params: Params) => {
        classes: Record<RuleName_1, string>;
        theme: Theme;
        css: import("./types").Css;
        cx: import("./types").Cx;
    };
    useStyles: () => {
        theme: Theme;
        css: import("./types").Css;
        cx: import("./types").Cx;
    };
};
