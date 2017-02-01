"use strict";
const React = require("react");
const s = require('./style.css');
const mobx_react_1 = require("mobx-react");
const WizardContainer_1 = require("./WizardContainer/WizardContainer");
const ProfileWizard = mobx_react_1.observer((props) => {
    const model = props.model;
    const currentStep = model.currentStep;
    console.log(currentStep);
    const advButtonMsg = model.isLastStep ? 'Finish' : 'Next';
    return (React.createElement("div", null,
        React.createElement("div", { className: s.heading },
            React.createElement("span", { className: s.heading_text }, "Please fill out info")),
        React.createElement(WizardContainer_1.default, { model: props.model })));
});
const viewProfileWizard = (model) => {
    return class PP extends React.Component {
        render() {
            return (React.createElement(ProfileWizard, { model: model }));
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = viewProfileWizard;
//# sourceMappingURL=ProfileWizard.js.map