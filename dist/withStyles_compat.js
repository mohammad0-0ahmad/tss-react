"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWithStyles = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = require("react");
const makeStyles_1 = require("./makeStyles");
const capitalize_1 = require("./tools/capitalize");
function createWithStyles(params) {
    const { useTheme } = params;
    const { makeStyles } = (0, makeStyles_1.createMakeStyles)({ useTheme });
    function withStyles(Component, cssObjectByRuleNameOrGetCssObjectByRuleName, params) {
        const Component_ = typeof Component === "string"
            ? (() => {
                const tag = Component;
                const Out = function (_a) {
                    var { children } = _a, props = __rest(_a, ["children"]);
                    return (0, react_1.createElement)(tag, props, children);
                };
                Object.defineProperty(Out, "name", {
                    "value": (0, capitalize_1.capitalize)(tag),
                });
                return Out;
            })()
            : Component;
        const name = (() => {
            const { name } = Component_;
            return typeof name === "string" ? name : undefined;
        })();
        const useStyles = makeStyles((params === null || params === void 0 ? void 0 : params.name) !== undefined ? params : { name })(typeof cssObjectByRuleNameOrGetCssObjectByRuleName === "function"
            ? (theme, props, classes) => incorporateMediaQueries(cssObjectByRuleNameOrGetCssObjectByRuleName(theme, props, classes))
            : incorporateMediaQueries(cssObjectByRuleNameOrGetCssObjectByRuleName));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Out = (0, react_1.forwardRef)(function (props, ref) {
            const { classes, cx } = useStyles(props);
            const { className } = props, rest = __rest(props, ["className"]);
            return ((0, jsx_runtime_1.jsx)(Component_, Object.assign({ ref: ref, className: cx(classes.root, className) }, (typeof Component === "string" ? {} : { classes }), rest), void 0));
        });
        if (name !== undefined) {
            Object.defineProperty(Out, "name", {
                "value": `${name}WithStyles`,
            });
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return Out;
    }
    return { withStyles };
}
exports.createWithStyles = createWithStyles;
function incorporateMediaQueries(cssObjectByRuleNameWithMediaQueries) {
    const cssObjectByRuleName = {};
    const cssObjectByRuleNameWithMediaQueriesByMediaQuery = {};
    Object.keys(cssObjectByRuleNameWithMediaQueries).forEach(ruleNameOrMediaQuery => ((ruleNameOrMediaQuery.startsWith("@media")
        ? cssObjectByRuleNameWithMediaQueriesByMediaQuery
        : cssObjectByRuleName)[ruleNameOrMediaQuery] =
        cssObjectByRuleNameWithMediaQueries[ruleNameOrMediaQuery]));
    Object.keys(cssObjectByRuleNameWithMediaQueriesByMediaQuery).forEach(mediaQuery => {
        const cssObjectByRuleNameBis = cssObjectByRuleNameWithMediaQueriesByMediaQuery[mediaQuery];
        Object.keys(cssObjectByRuleNameBis).forEach(ruleName => {
            var _a;
            return (cssObjectByRuleName[ruleName] = Object.assign(Object.assign({}, ((_a = cssObjectByRuleName[ruleName]) !== null && _a !== void 0 ? _a : {})), { [mediaQuery]: cssObjectByRuleNameBis[ruleName] }));
        });
    });
    return cssObjectByRuleName;
}
