"use strict";
const React = require("react");
const s = require('./style.css');
const FormStatusIcon_1 = require("../../../generic/forms/FormStatusIcon/FormStatusIcon");
const EFSFormImg = require('../../../../assets/images/forms/EFS.jpg');
const PenceFormImg = require('../../../../assets/images/forms/Pence.jpg');
const EFSForm = { formName: 'EFS', imgSrc: EFSFormImg };
const PenceForm = { formName: 'Pence', imgSrc: PenceFormImg };
const forms = [EFSForm, PenceForm];
const AllFormStatus = (props) => {
    return (React.createElement("div", { className: s.container },
        React.createElement("h1", null, "Your completed forms"),
        React.createElement("div", { onClick: props.model.navDailyTasks }, "Go to daily tasks - "),
        forms.map((form, key) => {
            return (React.createElement(FormStatusIcon_1.FormStatusIcon, { key: key, formName: form.formName, imgSrc: form.imgSrc }));
        })));
};
const viewAllFormStatus = (model) => {
    return class PP extends React.Component {
        render() {
            return (React.createElement(AllFormStatus, { model: model }));
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = viewAllFormStatus;
//# sourceMappingURL=AllFormStatus.js.map