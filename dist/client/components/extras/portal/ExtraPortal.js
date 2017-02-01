"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const React = require("react");
const mobx_react_1 = require("mobx-react");
const Dashboard_1 = require("../../generic/layouts/dashboard/Dashboard/Dashboard");
const ExtraPortalModel_1 = require("../../../models/extraPortal/ExtraPortalModel");
const extraPortalModel = new ExtraPortalModel_1.ExtraPortalModel();
let ExtraPortal = class ExtraPortal extends React.Component {
    render() {
        const MainView = extraPortalModel.mainView;
        return (React.createElement(Dashboard_1.default, null,
            React.createElement("h1", null, "Welcome extra! "),
            React.createElement(MainView, null)));
    }
};
ExtraPortal = __decorate([
    mobx_react_1.observer
], ExtraPortal);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ExtraPortal;
//# sourceMappingURL=ExtraPortal.js.map