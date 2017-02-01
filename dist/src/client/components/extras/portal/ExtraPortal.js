"use strict";
const React = require("react");
const Dashboard_1 = require("../../generic/layouts/dashboard/Dashboard/Dashboard");
const ProfileWizard_1 = require("../profile/ProfileWizard/ProfileWizard");
class ExtraPortal extends React.Component {
    render() {
        const form = { meow: 'meow' };
        return (React.createElement(Dashboard_1.default, null,
            React.createElement("h1", null, "Welcome extra! "),
            React.createElement(ProfileWizard_1.default, null)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ExtraPortal;
//# sourceMappingURL=ExtraPortal.js.map