"use strict";
const React = require("react");
const s = require('./style.css');
const PanelHeader = (props) => {
    return (React.createElement("div", { className: s.container }, props.headerItems.map((hi, key) => {
        return (React.createElement("span", { key: key, className: s.headerItem }, hi));
    })));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PanelHeader;
//# sourceMappingURL=PanelHeader.js.map