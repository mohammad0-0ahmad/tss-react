"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMakeStyles = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = require("react");
const Object_fromEntries_1 = require("./tools/polyfills/Object.fromEntries");
const objectKeys_1 = require("./tools/objectKeys");
const cssAndCx_1 = require("./cssAndCx");
const getDependencyArrayRef_1 = require("./tools/getDependencyArrayRef");
const typeGuard_1 = require("./tools/typeGuard");
const cache_1 = require("./cache");
const assert_1 = require("./tools/assert");
const getCounter = (() => {
    let counter = 0;
    return () => counter++;
})();
/**
 * @see {@link https://github.com/garronej/tss-react}
 */
function createMakeStyles(params) {
    const { useTheme } = params;
    /** returns useStyle. */
    function makeStyles(params) {
        const { name: nameOrWrappedName } = params !== null && params !== void 0 ? params : {};
        const name = typeof nameOrWrappedName !== "object"
            ? nameOrWrappedName
            : Object.keys(nameOrWrappedName)[0];
        return function (cssObjectByRuleNameOrGetCssObjectByRuleName) {
            const getCssObjectByRuleName = typeof cssObjectByRuleNameOrGetCssObjectByRuleName ===
                "function"
                ? cssObjectByRuleNameOrGetCssObjectByRuleName
                : () => cssObjectByRuleNameOrGetCssObjectByRuleName;
            const outerCounter = getCounter();
            return function useStyles(params) {
                const theme = useTheme();
                const { css, cx } = (0, cssAndCx_1.useCssAndCx)();
                const cache = (0, cache_1.useTssEmotionCache)();
                return (0, react_1.useMemo)(() => {
                    const refClassesCache = {};
                    const refClasses = typeof Proxy !== "undefined" &&
                        new Proxy({}, {
                            "get": (_target, propertyKey) => {
                                if (typeof propertyKey === "symbol") {
                                    (0, assert_1.assert)(false);
                                }
                                return (refClassesCache[propertyKey] = `${cache.key}-${outerCounter}${name !== undefined ? `-${name}` : ""}-${propertyKey}-ref`);
                            },
                        });
                    const cssObjectByRuleName = getCssObjectByRuleName(theme, params, refClasses || {});
                    const classes = (0, Object_fromEntries_1.objectFromEntries)((0, objectKeys_1.objectKeys)(cssObjectByRuleName).map(ruleName => {
                        const cssObject = cssObjectByRuleName[ruleName];
                        if (!cssObject.label) {
                            cssObject.label = `${name !== undefined ? `${name}-` : ""}${ruleName}`;
                        }
                        return [
                            ruleName,
                            `${css(cssObject)}${(0, typeGuard_1.typeGuard)(ruleName, ruleName in refClassesCache)
                                ? ` ${refClassesCache[ruleName]}`
                                : ""}`,
                        ];
                    }));
                    (0, objectKeys_1.objectKeys)(refClassesCache).forEach(ruleName => {
                        if (ruleName in classes) {
                            return;
                        }
                        classes[ruleName] =
                            refClassesCache[ruleName];
                    });
                    return {
                        classes,
                        theme,
                        css,
                        cx,
                    };
                }, [cache, css, cx, theme, (0, getDependencyArrayRef_1.getDependencyArrayRef)(params)]);
            };
        };
    }
    function useStyles() {
        const theme = useTheme();
        const { css, cx } = (0, cssAndCx_1.useCssAndCx)();
        return { theme, css, cx };
    }
    return { makeStyles, useStyles };
}
exports.createMakeStyles = createMakeStyles;
