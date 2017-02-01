"use strict";
const React = require("react");
const RaisedButton_1 = require("material-ui/RaisedButton");
const TextField_1 = require("material-ui/TextField");
const ProfileWizardContent = (props) => {
    return (React.createElement("div", null,
        props.fields.map(field => {
            React.createElement("div", null,
                React.createElement("h1", null, field.label),
                React.createElement(TextField_1.default, { id: "username" }));
        }),
        React.createElement(RaisedButton_1.default, { label: "Next" })));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileWizardContent;
//# sourceMappingURL=Content.js.map