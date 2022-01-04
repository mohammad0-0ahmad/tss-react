"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCssAndCx = exports.createCssAndCx = void 0;
const classnames_1 = require("./tools/classnames");
const serialize_1 = require("@emotion/serialize");
const utils_1 = require("@emotion/utils");
const useGuaranteedMemo_1 = require("./tools/useGuaranteedMemo");
const cache_1 = require("./cache");
const types_1 = require("./types");
const refPropertyName = "ref";
exports.createCssAndCx = (() => {
    function merge(registered, css, className) {
        const registeredStyles = [];
        const rawClassName = (0, utils_1.getRegisteredStyles)(registered, registeredStyles, className);
        if (registeredStyles.length < 2) {
            return className;
        }
        return rawClassName + css(registeredStyles);
    }
    function createCssAndCx(params) {
        const { cache } = params;
        const css = (...args) => {
            let ref = undefined;
            scope: {
                if (args.length !== 1) {
                    break scope;
                }
                const [arg] = args;
                if (!(arg instanceof Object)) {
                    break scope;
                }
                if (!(refPropertyName in arg)) {
                    break scope;
                }
                const mostLikelyRef = arg[refPropertyName];
                if (typeof mostLikelyRef !== "string" &&
                    mostLikelyRef !== undefined) {
                    break scope;
                }
                ref = mostLikelyRef;
                const argCopy = Object.assign({}, arg);
                delete argCopy[refPropertyName];
                args = [argCopy];
            }
            const serialized = (0, serialize_1.serializeStyles)(args, cache.registered);
            (0, utils_1.insertStyles)(cache, serialized, false);
            const className = `${cache.key}-${serialized.name}${ref === undefined ? "" : ` ${ref}`}`;
            scope: {
                const arg = args[0];
                if (!(0, types_1.matchCSSObject)(arg)) {
                    break scope;
                }
                increaseSpecificityToTakePrecedenceOverMediaQuerries.saveClassNameCSSObjectMapping(cache, className, arg);
            }
            return className;
        };
        const cx = (...args) => {
            const className = (0, classnames_1.classnames)(args);
            const feat27FixedClassnames = increaseSpecificityToTakePrecedenceOverMediaQuerries.fixClassName(cache, className, css);
            return merge(cache.registered, css, feat27FixedClassnames);
            //return merge(cache.registered, css, className);
        };
        return { css, cx };
    }
    return { createCssAndCx };
})().createCssAndCx;
/** Will pickup the contextual cache if any */
function useCssAndCx() {
    const cache = (0, cache_1.useTssEmotionCache)();
    const { css, cx } = (0, useGuaranteedMemo_1.useGuaranteedMemo)(() => (0, exports.createCssAndCx)({ cache }), [cache]);
    return { css, cx };
}
exports.useCssAndCx = useCssAndCx;
// https://github.com/garronej/tss-react/issues/27
const increaseSpecificityToTakePrecedenceOverMediaQuerries = (() => {
    const cssObjectMapByCache = new WeakMap();
    return {
        "saveClassNameCSSObjectMapping": (cache, className, cssObject) => {
            let cssObjectMap = cssObjectMapByCache.get(cache);
            if (cssObjectMap === undefined) {
                cssObjectMap = new Map();
                cssObjectMapByCache.set(cache, cssObjectMap);
            }
            cssObjectMap.set(className, cssObject);
        },
        "fixClassName": (() => {
            function fix(classNameCSSObjects) {
                let isThereAnyMediaQueriesInPreviousClasses = false;
                return classNameCSSObjects.map(([className, cssObject]) => {
                    if (cssObject === undefined) {
                        return className;
                    }
                    let out;
                    if (!isThereAnyMediaQueriesInPreviousClasses) {
                        out = className;
                        for (const key in cssObject) {
                            if (key.startsWith("@media")) {
                                isThereAnyMediaQueriesInPreviousClasses = true;
                                break;
                            }
                        }
                    }
                    else {
                        out = {
                            "&&": cssObject,
                        };
                    }
                    return out;
                });
            }
            return (cache, className, css) => {
                const cssObjectMap = cssObjectMapByCache.get(cache);
                return (0, classnames_1.classnames)(fix(className
                    .split(" ")
                    .map(className => [
                    className,
                    cssObjectMap === null || cssObjectMap === void 0 ? void 0 : cssObjectMap.get(className),
                ])).map(classNameOrCSSObject => typeof classNameOrCSSObject === "string"
                    ? classNameOrCSSObject
                    : css(classNameOrCSSObject)));
            };
        })(),
    };
})();
