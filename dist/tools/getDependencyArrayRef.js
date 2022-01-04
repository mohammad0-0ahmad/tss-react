"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDependencyArrayRef = void 0;
/**
 * useEffect(
 *    ()=> { ... },
 *    [ { "foo": "bar" } ]
 * )
 * => The callback will be invoked every render.
 * because { "foo": "bar" } is a new instance every render.
 *
 * useEffect(
 *    ()=> { ... },
 *    [ getDependencyArrayRef({ "foo": "bar" }) ]
 * );
 * => The callback will only be invoked once.
 *
 * The optimization will be enabled only if obj is
 * of the form Record<string, string | number | undefined | null>
 * overwise the object is returned (the function is the identity function).
 */
function getDependencyArrayRef(obj) {
    if (!(obj instanceof Object) || typeof obj === "function") {
        return obj;
    }
    const arr = [];
    for (const key in obj) {
        const value = obj[key];
        const typeofValue = typeof value;
        if (!(typeofValue === "string" ||
            (typeofValue === "number" && !isNaN(value)) ||
            typeofValue === "boolean" ||
            value === undefined ||
            value === null)) {
            return obj;
        }
        arr.push(`${key}:${typeofValue}_${value}`);
    }
    return "xSqLiJdLMd9s" + arr.join("|");
}
exports.getDependencyArrayRef = getDependencyArrayRef;
