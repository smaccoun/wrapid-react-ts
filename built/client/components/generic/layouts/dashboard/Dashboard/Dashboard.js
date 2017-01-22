"use strict";
const React = require("react");
const s = require('./style.css');
const Navbar_1 = require("../Navbar/Navbar");
class Dashboard extends React.Component {
    render() {
        return (React.createElement("div", { className: s.container },
            React.createElement(Navbar_1.default, null),
            React.createElement("div", { className: s.mainPage }, this.props.children)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map