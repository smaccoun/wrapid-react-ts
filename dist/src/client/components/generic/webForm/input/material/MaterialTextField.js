"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const react_1 = require("react");
const mobx_react_1 = require("mobx-react");
const TextField_1 = require("material-ui/TextField");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mobx_react_1.observer(({ field, type = 'text', placeholder = null }) => (react_1.default.createElement("div", null,
    react_1.default.createElement(TextField_1.default, __assign({}, field.bind({ type, placeholder }))),
    react_1.default.createElement("br", null))));
//# sourceMappingURL=MaterialTextField.js.map