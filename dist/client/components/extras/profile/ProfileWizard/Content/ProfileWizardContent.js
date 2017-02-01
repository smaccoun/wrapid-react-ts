"use strict";
const React = require("react");
const s = require('./style.css');
const TextField_1 = require("material-ui/TextField");
const ProfileWizardContent = (props) => {
    return (React.createElement("div", { className: s.container }, Object.keys(props.fields).map((fieldKey, key) => {
        console.log(fieldKey);
        const field = props.fields[fieldKey];
        return (React.createElement(TextField_1.default, { key: field.label, id: field.label, floatingLabelText: field.label }));
    })));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProfileWizardContent;
//# sourceMappingURL=ProfileWizardContent.js.map