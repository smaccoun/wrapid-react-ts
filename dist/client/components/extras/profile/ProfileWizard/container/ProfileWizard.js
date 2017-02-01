"use strict";
const React = require("react");
const s = require('./style.css');
const mobx_react_1 = require("mobx-react");
const ProfileWizardContent_1 = require("../Content/ProfileWizardContent");
const ProfileWizardModel_1 = require("../ProfileWizardModel");
const FlatButton_1 = require("material-ui/FlatButton");
const ProfileWizard = mobx_react_1.observer((props) => {
    const model = props.model;
    const currentStep = model.currentStep;
    console.log(currentStep);
    const advButtonMsg = model.isLastStep ? 'Finish' : 'Next';
    return (React.createElement("div", { className: s.container },
        React.createElement("div", { className: s.header }, currentStep.title),
        React.createElement(ProfileWizardContent_1.default, { fields: currentStep.fields }),
        React.createElement("div", { className: s.footer },
            React.createElement(FlatButton_1.default, { style: { color: '#50E3C2' }, label: advButtonMsg, onClick: model.incrementStep }))));
});
const viewProfileWizard = () => {
    const model = new ProfileWizardModel_1.ProfileWizardModel();
    return class PP extends React.Component {
        render() {
            return (React.createElement(ProfileWizard, { model: model }));
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = viewProfileWizard;
//# sourceMappingURL=ProfileWizard.js.map