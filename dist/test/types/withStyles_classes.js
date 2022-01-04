"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const withStyles_1 = require("../../withStyles");
const assert_1 = require("tsafe/assert");
const Button_1 = __importDefault(require("@mui/material/Button"));
const react_1 = __importDefault(require("react"));
const theme = {
    "primaryColor": "blue",
};
const { withStyles } = (0, withStyles_1.createWithStyles)({
    "useTheme": () => theme,
});
{
    {
        const MyComponentStyled = withStyles(Button_1.default, (theme, props, classes) => {
            (0, assert_1.assert)();
            (0, assert_1.assert)();
            (0, assert_1.assert)();
            return {
                "colorInherit": {
                    "position": "absolute",
                },
            };
        });
        (0, assert_1.assert)();
    }
    {
        class MyClassBasedComponent extends react_1.default.Component {
            render() {
                return ((0, jsx_runtime_1.jsxs)("div", { children: [" ", this.props.message, " ", this.state.count, " "] }, void 0));
            }
        }
        const MyClassBasedComponentStyled = withStyles(MyClassBasedComponent, (theme, props, classes) => {
            (0, assert_1.assert)();
            (0, assert_1.assert)();
            (0, assert_1.assert)();
            return {
                "root": {
                    "backgroundColor": "red",
                },
            };
        });
        (0, assert_1.assert)();
    }
    withStyles(Button_1.default, {});
    withStyles(Button_1.default, {
        "colorInherit": {
            "position": "absolute",
        },
    });
    withStyles(Button_1.default, {
        "colorInherit": {
            //@ts-expect-error
            "color": 33,
        },
    });
    withStyles(Button_1.default, {
        "colorInherit": {
            //@ts-expect-error
            "position": "absoluteXXX",
        },
    });
    withStyles(Button_1.default, {
        "colorInherit": {
            "position": "absolute",
        },
        //@ts-expect-error
        "ddd": {},
    });
    withStyles(Button_1.default, {
        "colorInherit": {
            "position": "absolute",
        },
        "@media (min-width: 960px)": {
            "colorInherit": {
                "position": "absolute",
            },
        },
    });
    withStyles(Button_1.default, {
        "colorInherit": {
            "position": "absolute",
        },
        "@media (min-width: 960px)": {
            //@ts-expect-error
            "xxx": {},
        },
    });
    withStyles(Button_1.default, {
        "colorInherit": {
            "position": "absolute",
        },
        "@media (min-width: 960px)": {
            "colorInherit": {
                //@ts-expect-error
                "position": "absoluteXXX",
            },
        },
    });
    withStyles(Button_1.default, {
        "colorInherit": {
            "position": "absolute",
        },
        "@media (min-width: 960px)": {
            "colorInherit": {
                //@ts-expect-error
                "color": 33,
            },
        },
    });
    withStyles(Button_1.default, 
    //@ts-expect-error: needs as const
    () => ({
        "colorInherit": {
            "position": "absolute",
        },
    }));
    withStyles(Button_1.default, () => ({
        "colorInherit": {
            "position": "absolute",
        },
    }));
    withStyles(Button_1.default, () => ({
        "colorInherit": {
            "position": "absolute",
        },
    }));
    withStyles(Button_1.default, () => ({
        "colorInherit": {
            "position": "absolute",
        },
    }));
    withStyles(Button_1.default, 
    //@ts-expect-error
    () => ({
        "colorInherit": {
            "color": 33,
        },
    }));
    withStyles(Button_1.default, () => ({
        "colorInherit": {
            "position": "absolute",
        },
        //Unfortunately passes
        "ddd": {},
    }));
    withStyles(Button_1.default, 
    //@ts-expect-error: need a const
    () => ({
        "colorInherit": {
            "position": "absolute",
        },
        "@media (min-width: 960px)": {
            "colorInherit": {
                "position": "absolute",
            },
        },
    }));
    withStyles(Button_1.default, 
    //@ts-expect-error
    () => ({
        "colorInherit": {
            "position": "absolute",
        },
        "@media (min-width: 960px)": {
            "colorInherit": {
                "color": 33,
            },
        },
    }));
    withStyles(Button_1.default, () => ({
        "colorInherit": {
            "position": "absolute",
        },
        "@media (min-width: 960px)": {
            "colorInherit": {
                "position": "absolute",
            },
        },
    }));
    withStyles(Button_1.default, () => ({
        "colorInherit": {
            "position": "absolute",
        },
        "@media (min-width: 960px)": {
            "colorInherit": {
                "position": "absolute",
            },
        },
    }));
    withStyles(Button_1.default, () => ({
        "colorInherit": {
            "position": "absolute",
        },
        [`@media (min-width: ${960}px)`]: {
            "colorInherit": {
                "position": "absolute",
            },
        },
    }));
    withStyles(Button_1.default, 
    //@ts-expect-error
    () => ({
        "colorInherit": {
            "position": "absolute",
        },
        [`@media (min-width: ${960}px)`]: {
            "colorInherit": {
                "color": 33,
            },
        },
    }));
}
