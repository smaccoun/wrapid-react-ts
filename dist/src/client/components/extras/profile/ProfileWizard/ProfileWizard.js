"use strict";
const React = require("react");
const ContentForm_1 = require("./ContentForm/ContentForm");
const Fields = require('../fields/fields');
var ValidForm = require('./ContentForm/ValidForm');
const { fields, plugins } = Fields;
class ProfileWizard extends React.Component {
    render() {
        const form = new ValidForm({ fields }, { plugins });
        return (React.createElement("div", null,
            React.createElement("h1", null, "Profile Wizard"),
            React.createElement(ContentForm_1.default, { form: form })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileWizard;
//# sourceMappingURL=ProfileWizard.js.map