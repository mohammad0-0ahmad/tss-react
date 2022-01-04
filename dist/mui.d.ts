/// <reference types="react" />
export declare const makeStyles: <ParamsType = void, RuleNameSubsetReferencableInNestedSelectors extends string = never>(params?: {
    name?: string | Record<string, unknown> | undefined;
} | undefined) => <Params = ParamsType, RuleName extends string = string>(cssObjectByRuleNameOrGetCssObjectByRuleName: Record<RuleName, import("./types").CSSObject> | ((theme: import("@mui/material/styles").Theme, params: Params, classes: Record<RuleNameSubsetReferencableInNestedSelectors, string>) => Record<RuleNameSubsetReferencableInNestedSelectors | RuleName, import("./types").CSSObject>)) => (params: Params) => {
    classes: Record<RuleName, string>;
    theme: import("@mui/material/styles").Theme;
    css: import("./types").Css;
    cx: import("./types").Cx;
}, withStyles: <C extends keyof import("react").ReactHTML | import("./tools/ReactComponent").ReactComponent<any>, Props extends C extends import("./tools/ReactComponent").ReactComponent<infer P> ? P : C extends keyof import("react").ReactHTML ? import("react").ReactHTML[C] extends import("./tools/ReactComponent").ReactComponent<infer P_1> ? NonNullable<P_1> : never : never, CssObjectByRuleName extends Props extends {
    classes?: Partial<infer ClassNameByRuleName> | undefined;
} ? { [RuleName in keyof ClassNameByRuleName]?: import("./types").CSSObject | undefined; } & {
    [mediaQuery: `@media${string}`]: { [RuleName_1 in keyof ClassNameByRuleName]?: import("./types").CSSObject | undefined; };
} : {
    root: import("./types").CSSObject;
} & {
    [mediaQuery: `@media${string}`]: {
        root: import("./types").CSSObject;
    };
}>(Component: C, cssObjectByRuleNameOrGetCssObjectByRuleName: (CssObjectByRuleName & {
    [mediaQuery: `@media${string}`]: { [Key in keyof CssObjectByRuleName]?: import("./types").CSSObject | undefined; };
}) | ((theme: import("@mui/material/styles").Theme, props: Props, classes: Record<Exclude<keyof CssObjectByRuleName, `@media${string}`>, string>) => CssObjectByRuleName), params?: {
    name?: string | Record<string, unknown> | undefined;
} | undefined) => C extends keyof import("react").ReactHTML ? import("react").ReactHTML[C] : C, useStyles: () => {
    theme: import("@mui/material/styles").Theme;
    css: import("./types").Css;
    cx: import("./types").Cx;
};
