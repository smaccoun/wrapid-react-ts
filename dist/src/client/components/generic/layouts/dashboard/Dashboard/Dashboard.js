"use strict";
const React = require("react");
const Navbar_1 = require("../Navbar/Navbar");
class Dashboard extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(Navbar_1.default, null),
            this.props.children));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map