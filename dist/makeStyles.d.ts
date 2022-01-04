import type { CSSObject } from "./types";
/**
 * @see {@link https://github.com/garronej/tss-react}
 */
export declare function createMakeStyles<Theme>(params: {
    useTheme: () => Theme;
}): {
    makeStyles: <ParamsType = void, RuleNameSubsetReferencableInNestedSelectors extends string = never>(params?: {
        name?: string | Record<string, unknown> | undefined;
    } | undefined) => <Params = ParamsType, RuleName extends string = string>(cssObjectByRuleNameOrGetCssObjectByRuleName: Record<RuleName, CSSObject> | ((theme: Theme, params: Params, classes: Record<RuleNameSubsetReferencableInNestedSelectors, string>) => Record<RuleNameSubsetReferencableInNestedSelectors | RuleName, CSSObject>)) => (params: Params) => {
        classes: Record<RuleName, string>;
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
