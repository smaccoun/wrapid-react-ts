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
const mobx_1 = require("mobx");
const ProfileWizardModel_1 = require("../../components/extras/profile/ProfileWizard/ProfileWizardModel");
var ViewName;
(function (ViewName) {
    ViewName[ViewName["ProfileWizardView"] = 0] = "ProfileWizardView";
    ViewName[ViewName["DailyTaskView"] = 1] = "DailyTaskView";
})(ViewName || (ViewName = {}));
class ExtraPortal {
    constructor() {
        this.profile = null;
        this.autoSetMainView = () => {
            mobx_1.autorun(() => {
                if (!this.hasCompletedProfile) {
                    const model = new ProfileWizardModel_1.ProfileWizardModel();
                    const viewName = ViewName.ProfileWizardView;
                    this.mainView = { viewName, model };
                }
                const viewName = ViewName.DailyTaskView;
                const model = {};
                this.mainView = { viewName, model };
            });
        };
        this.autoSetMainView();
    }
    get hasCompletedProfile() {
        return false;
    }
}
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], ExtraPortal.prototype, "profile", void 0);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], ExtraPortal.prototype, "hasCompletedProfile", null);
exports.ExtraPortal = ExtraPortal;
//# sourceMappingURL=ExtraPortal.js.map