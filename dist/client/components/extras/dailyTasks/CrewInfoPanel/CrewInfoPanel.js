"use strict";
const React = require("react");
const s = require('./style.css');
const DefaultPanel_1 = require("../panels/DefaultPanel/DefaultPanel");
const CrewInfoPanel = (props) => {
    return (React.createElement(DefaultPanel_1.default, { headerItems: ['Contact Info'] }, props.crewInfoItems.map((ci, key) => {
        return (React.createElement("div", { className: s.infoItems, key: key },
            React.createElement("span", { className: s.role }, ci.role),
            React.createElement("span", { className: s.name }, ci.name)));
    })));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CrewInfoPanel;
//# sourceMappingURL=CrewInfoPanel.js.map