"use strict";
const React = require("react");
const s = require('./style.css');
const DefaultPanel_1 = require("../../dailyTasks/panels/DefaultPanel/DefaultPanel");
const PanelFooter_1 = require("../../dailyTasks/panels/PanelFooter/PanelFooter");
const MainSchedule = () => {
    return (React.createElement(DefaultPanel_1.default, { headerItems: ['Schedule', 'Monday May 25, 2017'] },
        React.createElement(ScheduleItem, { title: 'Start Time', startTm: '8:00 am' }),
        React.createElement(ScheduleItem, { title: 'Lunch Break', startTm: '11:30 am' }),
        React.createElement(ScheduleItem, { title: 'Action Shot', startTm: '1:30 pm' }),
        React.createElement(ScheduleItem, { title: 'Estimated Wrap Time', startTm: '3:00 pm' }),
        React.createElement(PanelFooter_1.default, null,
            React.createElement("div", { className: s.footer },
                React.createElement("button", { className: s.checkinButton },
                    React.createElement("span", null, "CHECK IN"))))));
};
const ScheduleItem = (props) => {
    return (React.createElement("div", { className: s.itemContainer },
        React.createElement("span", { className: s.title }, props.title),
        React.createElement("span", { className: s.startTm }, props.startTm)));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MainSchedule;
//# sourceMappingURL=MainSchedule.js.map