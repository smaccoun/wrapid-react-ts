"use strict";
const React = require("react");
const s = require('./style.css');
const FormStatusIcon = (props) => {
    return (React.createElement("div", { className: s.container },
        React.createElement("img", { src: `${props.imgSrc}`, className: s.iconImg }),
        React.createElement("div", { className: s.infoContainer },
            React.createElement("span", { className: s.formName }, props.formName),
            React.createElement("span", { className: s.completedTime }, "Completed: 01/28/17"),
            React.createElement("span", { className: s.completedTime }, "8:05am"))));
};
exports.FormStatusIcon = FormStatusIcon;
//# sourceMappingURL=FormStatusIcon.js.map