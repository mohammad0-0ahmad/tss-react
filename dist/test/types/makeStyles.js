"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("tsafe/assert");
const makeStyles_1 = require("../../makeStyles");
const { makeStyles } = (0, makeStyles_1.createMakeStyles)({
    "useTheme": () => null,
});
const useStyles = makeStyles()((theme, props, classes) => {
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    (0, assert_1.assert)();
    return {
        "root": {
            "backgroundColor": "red",
            [`& .${classes.xxx}`]: {
                "color": "white",
            },
        },
        "xxx": {},
    };
});
const { classes } = useStyles();
(0, assert_1.assert)();
{
    const useStyles = makeStyles()((_theme, _props, classes) => {
        (0, assert_1.assert)();
        return {
            "root": {
                "backgroundColor": "red",
            },
        };
    });
    const { classes } = useStyles();
    (0, assert_1.assert)();
}
makeStyles()(
//@ts-expect-error: "xxx" should be added to the record of CSSObject
(theme, props, refs) => ({
    "root": {
        "backgroundColor": "red",
    },
}));
{
    const { makeStyles } = (0, makeStyles_1.createMakeStyles)({
        "useTheme": () => null,
    });
    const useStyles = makeStyles()({
        "root": {
            "backgroundColor": "red",
        },
        "xxx": {},
    });
    const { classes } = useStyles();
    (0, assert_1.assert)();
}
