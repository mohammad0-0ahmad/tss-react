"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const withStyles_1 = require("../../withStyles");
const assert_1 = require("tsafe/assert");
const theme = {
    "primaryColor": "blue",
};
const { withStyles } = (0, withStyles_1.createWithStyles)({
    "useTheme": () => theme,
});
{
    const DivStyled = withStyles("div", (theme, props) => {
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
withStyles("div", {
    "root": {
        "position": "absolute",
    },
});
withStyles("div", {
    "root": {
        //@ts-expect-error
        "position": "absoluteXXX",
    },
});
//We wish it wouldn't pass
withStyles("div", {
    "root": {
        "position": "absolute",
    },
    "not_root": {},
});
withStyles("div", {
    "root": {
        //@ts-expect-error
        "color": 33,
    },
});
withStyles("div", {
    "root": {
        "position": "absolute",
    },
    "@media (min-width: 960px)": {
        "root": {
            "position": "absolute",
        },
    },
});
withStyles("div", {
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
withStyles("div", {
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
withStyles("div", {
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
withStyles("div", {
    "root": {
        "color": "red",
    },
    [`@media (min-width: ${960}px)`]: {
        "root": {
            "position": "absolute",
        },
    },
});
withStyles("div", {
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
withStyles("div", {
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
withStyles("div", () => ({
    "root": {
        "position": "absolute",
    },
}));
withStyles("div", 
//@ts-expect-error
() => ({
    "root": {
        "position": "absoluteXXX",
    },
}));
withStyles("div", 
//@ts-expect-error
() => ({
    "root": {
        "color": 33,
    },
}));
withStyles("div", () => ({
    "root": {
        "position": "absolute",
    },
    //Unfortunately passes 😞
    "not_root": {},
}));
withStyles("div", () => ({
    "root": {
        "position": "absolute",
    },
    "@media (min-width: 960px)": {
        "root": {
            "position": "absolute",
        },
    },
}));
withStyles("div", 
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
withStyles("div", 
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
withStyles("div", 
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
withStyles("div", () => ({
    "root": {
        "position": "absolute",
    },
    [`@media (min-width: ${960}px)`]: {
        "root": {
            "color": "red",
        },
    },
}));
