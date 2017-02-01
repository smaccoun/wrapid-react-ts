"use strict";
const React = require("react");
const s = require('./style.css');
const MainSchedule_1 = require("../../schedule/MainSchedule/MainSchedule");
const CrewInfoPanel_1 = require("../../dailyTasks/CrewInfoPanel/CrewInfoPanel");
const sampleCrewInfoItems = [
    { role: 'Lead PA', name: 'Josh Weinberg' },
    { role: 'Extra PA', name: 'Rany Lahey' },
    { role: 'Wardrobe Manager', name: 'Pam Poovey' }
];
const DailyTasksMainPage = (props) => {
    return (React.createElement("div", { className: s.container },
        React.createElement("div", { className: s.headerInfo },
            React.createElement("span", { className: s.date }, "Monday May 25, 2016"),
            React.createElement("span", { className: s.title }, "Welcome, Steve"),
            React.createElement("span", { className: s.production }, "AMC's The Walking Dead")),
        React.createElement(MainSchedule_1.default, null),
        React.createElement(CrewInfoPanel_1.default, { crewInfoItems: sampleCrewInfoItems })));
};
const viewDailyTasks = (model) => {
    return class PP extends React.Component {
        render() {
            return (React.createElement(DailyTasksMainPage, { model: model }));
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = viewDailyTasks;
//# sourceMappingURL=DailyTasksMainPage.js.map