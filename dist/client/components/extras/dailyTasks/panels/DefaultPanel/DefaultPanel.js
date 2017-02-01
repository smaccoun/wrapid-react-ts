"use strict";
const React = require("react");
const s = require('./style.css');
const PanelHeader_1 = require("../PanelHeader/PanelHeader");
const DefaultPanel = (props) => {
    return (React.createElement("div", { className: s.container },
        React.createElement(PanelHeader_1.default, { headerItems: props.headerItems }),
        React.createElement("div", { className: s.contentContainer }, props.children)));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DefaultPanel;
//# sourceMappingURL=DefaultPanel.js.map