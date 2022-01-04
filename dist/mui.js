"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = exports.withStyles = exports.makeStyles = void 0;
const styles_1 = require("@mui/material/styles");
const index_1 = require("./index");
_a = (0, index_1.createMakeAndWithStyles)({
    useTheme: styles_1.useTheme,
}), exports.makeStyles = _a.makeStyles, exports.withStyles = _a.withStyles, exports.useStyles = _a.useStyles;
