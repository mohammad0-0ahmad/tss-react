import type { ReactHTML } from "react";
import type { ReactComponent } from "./tools/ReactComponent";
import type { CSSObject } from "./types";
export declare function createWithStyles<Theme>(params: {
    useTheme: () => Theme;
}): {
    withStyles: <C extends keyof ReactHTML | ReactComponent<any>, Props extends C extends ReactComponent<infer P> ? P : C extends keyof ReactHTML ? ReactHTML[C] extends ReactComponent<infer P_1> ? NonNullable<P_1> : never : never, CssObjectByRuleName extends Props extends {
        classes?: Partial<infer ClassNameByRuleName> | undefined;
    } ? { [RuleName in keyof ClassNameByRuleName]?: CSSObject | undefined; } : {
        root: CSSObject;
    }>(Component: C, cssObjectByRuleNameOrGetCssObjectByRuleName: CssObjectByRuleName | ((theme: Theme, props: Props, classes: Record<keyof CssObjectByRuleName, string>) => CssObjectByRuleName), params?: {
        name?: string | Record<string, unknown> | undefined;
    } | undefined) => C extends keyof ReactHTML ? ReactHTML[C] : C;
};
