"use strict";
const React = require("react");
const s = require('./style.css');
const AvatarNail_1 = require("../../../images/photoNails/AvatarNail/AvatarNail");
const ActivityBell_1 = require("./ActivityBell/ActivityBell");
class Navbar extends React.Component {
    render() {
        return (React.createElement("div", { className: s.container },
            React.createElement("div", { className: s.brandLabel }, "Wrapid"),
            React.createElement("div", { className: s.rightActionItems },
                React.createElement(ActivityBell_1.default, null),
                React.createElement(AvatarNail_1.default, null),
                React.createElement(HamburgerMenu, null))));
    }
}
const HamburgerMenu = () => {
    return (React.createElement("div", { className: s.HamburgerMenu }, "--"));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map