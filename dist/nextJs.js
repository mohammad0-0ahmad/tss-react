"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withEmotionCache = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const create_instance_1 = __importDefault(require("@emotion/server/create-instance"));
const cache_1 = require("./cache");
function withEmotionCache(params) {
    const { Document, getCaches = () => [] } = params;
    return class DocumentWithEmotionCache extends Document {
        static getInitialProps(ctx) {
            return __awaiter(this, void 0, void 0, function* () {
                const emotionServers = (() => {
                    const caches = getCaches();
                    return (0, cache_1.getDoExistsTssDefaultEmotionCacheMemoizedValue)() &&
                        caches.indexOf((0, cache_1.getTssDefaultEmotionCache)()) >= 0
                        ? caches
                        : [
                            ...caches,
                            (0, cache_1.getTssDefaultEmotionCache)({ "doReset": true }),
                        ];
                })()
                    .sort((a, b) => getPrepend(a) === getPrepend(b)
                    ? 0
                    : getPrepend(a)
                        ? -1
                        : 1)
                    .map(create_instance_1.default);
                const initialProps = yield Document.getInitialProps(ctx);
                return Object.assign(Object.assign({}, initialProps), { "styles": [
                        ...React.Children.toArray(initialProps.styles),
                        ...emotionServers
                            .map(({ extractCriticalToChunks }) => extractCriticalToChunks(initialProps.html)
                            .styles.filter(({ css }) => css !== "")
                            .map(style => ((0, jsx_runtime_1.jsx)("style", { "data-emotion": `${style.key} ${style.ids.join(" ")}`, dangerouslySetInnerHTML: {
                                "__html": style.css,
                            } }, style.key))))
                            .reduce((prev, curr) => [...prev, ...curr], []),
                    ] });
            });
        }
    };
}
exports.withEmotionCache = withEmotionCache;
function getPrepend(cache) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return !!cache.sheet.prepend;
}
