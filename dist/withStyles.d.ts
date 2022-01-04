import type { ReactHTML } from "react";
import type { ReactComponent } from "./tools/ReactComponent";
import type { CSSObject } from "./types";
export declare function createWithStyles<Theme>(params: {
    useTheme: () => Theme;
}): {
    withStyles: <C extends keyof ReactHTML | ReactComponent<any>, Props extends C extends ReactComponent<infer P> ? P : C extends keyof ReactHTML ? ReactHTML[C] extends ReactComponent<infer P_1> ? NonNullable<P_1> : never : never, CssObjectByRuleName extends Props extends {
        classes?: Partial<infer ClassNameByRuleName> | undefined;
    } ? { [RuleName in keyof ClassNameByRuleName]?: CSSObject | undefined; } & {
        [mediaQuery: `@media${string}`]: { [RuleName_1 in keyof ClassNameByRuleName]?: CSSObject | undefined; };
    } : {
        root: CSSObject;
    } & {
        [mediaQuery: `@media${string}`]: {
            root: CSSObject;
        };
    }>(Component: C, cssObjectByRuleNameOrGetCssObjectByRuleName: (CssObjectByRuleName & {
        [mediaQuery: `@media${string}`]: { [Key in keyof CssObjectByRuleName]?: CSSObject | undefined; };
    }) | ((theme: Theme, props: Props, classes: Record<Exclude<keyof CssObjectByRuleName, `@media${string}`>, string>) => CssObjectByRuleName), params?: {
        name?: string | Record<string, unknown> | undefined;
    } | undefined) => C extends keyof ReactHTML ? ReactHTML[C] : C;
};
