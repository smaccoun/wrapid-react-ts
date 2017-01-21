"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const React = require("react");
const mobx_1 = require("mobx");
const mobx_react_1 = require("mobx-react");
let Login = class Login extends React.Component {
    constructor() {
        super(...arguments);
        this.usernameInput = '';
        this.setUserNameInput = (e) => {
            console.log(e.target.value);
            this.usernameInput = e.target.value;
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("input", { onChange: this.setUserNameInput }),
            React.createElement("input", null),
            React.createElement("button", null, "Submit")));
    }
};
__decorate([
    mobx_1.observable,
    __metadata("design:type", String)
], Login.prototype, "usernameInput", void 0);
__decorate([
    mobx_1.action,
    __metadata("design:type", Object)
], Login.prototype, "setUserNameInput", void 0);
Login = __decorate([
    mobx_react_1.observer
], Login);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Login;
//# sourceMappingURL=Login.js.map