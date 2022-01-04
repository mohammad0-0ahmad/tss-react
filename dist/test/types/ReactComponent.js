"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("react");
const Button_1 = __importDefault(require("@mui/material/Button"));
const assert_1 = require("tsafe/assert");
{
    function MyComponent(_props) {
        return (0, jsx_runtime_1.jsx)("div", {}, void 0);
    }
    (0, assert_1.assert)();
}
{
    const MyComponent = (0, react_2.memo)((_props) => {
        return (0, jsx_runtime_1.jsx)("div", {}, void 0);
    });
    (0, assert_1.assert)();
}
{
    class MyComponent extends react_1.Component {
    }
    (0, assert_1.assert)();
}
{
    const Component = Button_1.default;
    (0, assert_1.assert)();
}
