"use strict";
const React = require("react");
const s = require('./style.css');
class ActivityBell extends React.Component {
    render() {
        return (React.createElement("div", { className: s.container },
            React.createElement("div", { className: s.bellQtContainer },
                React.createElement("div", { className: s.activeQt }, "3"),
                React.createElement("i", { className: "fa fa-bell" }))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ActivityBell;
//# sourceMappingURL=ActivityBell.js.map