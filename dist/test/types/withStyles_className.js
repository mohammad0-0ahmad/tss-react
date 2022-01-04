"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const withStyles_1 = require("../../withStyles");
const assert_1 = require("tsafe/assert");
const react_1 = __importDefault(require("react"));
const theme = {
    "primaryColor": "blue",
};
const { withStyles } = (0, withStyles_1.createWithStyles)({
    "useTheme": () => theme,
});
function MyComponent(_props) {
    return (0, jsx_runtime_1.jsx)("div", {}, void 0);
}
{
    const MyComponentStyled = withStyles(MyComponent, (theme, props, classes) => {
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
withStyles(MyComponent, {
    "root": {
        "position": "absolute",
    },
});
withStyles(MyComponent, {
    "root": {
        //@ts-expect-error
        "position": "absoluteXXX",
    },
});
//We wish it wouldn't pass
withStyles(MyComponent, {
    "root": {
        "position": "absolute",
    },
    "not_root": {},
});
withStyles(MyComponent, {
    "root": {
        //@ts-expect-error
        "color": 33,
    },
});
withStyles(MyComponent, {
    "root": {
        "position": "absolute",
    },
    "@media (min-width: 960px)": {
        "root": {
            "position": "absolute",
        },
    },
});
withStyles(MyComponent, {
    "root": {
        "position": "absolute",
    },
    "@media (min-width: 960px)": {
        "root": {
            //@ts-expect-error
            "position": "absoluteXXXX",
        },
    },
});
withStyles(MyComponent, {
    "root": {
        "position": "absolute",
    },
    "@media (min-width: 960px)": {
        "root": {
            //@ts-expect-error
            "color": 33,
        },
    },
});
withStyles(MyComponent, {
    "root": {
        //@ts-expect-error: very strange that error appears here if
        //we dont use as const for the media query
        "color": "red",
    },
    [`@media (min-width: ${960}px)`]: {
        "root": {
            "color": "red",
        },
    },
});
withStyles(MyComponent, {
    "root": {
        "color": "red",
    },
    [`@media (min-width: ${960}px)`]: {
        "root": {
            "position": "absolute",
        },
    },
});
withStyles(MyComponent, {
    "root": {
        "color": "red",
    },
    [`@media (min-width: ${960}px)`]: {
        "root": {
            //@ts-expect-error
            "position": "absoluteXXX",
        },
    },
});
withStyles(MyComponent, {
    "root": {
        "position": "absolute",
    },
    [`@media (min-width: ${960}px)`]: {
        "root": {
            //@ts-expect-error
            "color": 33,
        },
    },
});
withStyles(MyComponent, () => ({
    "root": {
        "position": "absolute",
    },
}));
withStyles(MyComponent, 
//@ts-expect-error
() => ({
    "root": {
        "position": "absoluteXXX",
    },
}));
withStyles(MyComponent, 
//@ts-expect-error
() => ({
    "root": {
        "color": 33,
    },
}));
withStyles(MyComponent, () => ({
    "root": {
        "position": "absolute",
    },
    //Unfortunately passes 😞
    "not_root": {},
}));
withStyles(MyComponent, () => ({
    "root": {
        "position": "absolute",
    },
    "@media (min-width: 960px)": {
        "root": {
            "position": "absolute",
        },
    },
}));
withStyles(MyComponent, 
//@ts-expect-error
() => ({
    "root": {
        "position": "absolute",
    },
    "@media (min-width: 960px)": {
        "root": {
            "position": "absoluteXXX",
        },
    },
}));
withStyles(MyComponent, 
//@ts-expect-error
() => ({
    "root": {
        "position": "absolute",
    },
    "@media (min-width: 960px)": {
        "root": {
            "color": 33,
        },
    },
}));
withStyles(MyComponent, 
//@ts-expect-error: need const
() => ({
    "root": {
        "position": "absolute",
    },
    [`@media (min-width: ${960}px)`]: {
        "root": {
            "color": "red",
        },
    },
}));
withStyles(MyComponent, () => ({
    "root": {
        "position": "absolute",
    },
    [`@media (min-width: ${960}px)`]: {
        "root": {
            "color": "red",
        },
    },
}));
