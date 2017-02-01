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
const router_1 = require("../../../router/router");
const ProfileWizard_1 = require("../../components/extras/profile/ProfileWizard/ProfileWizard");
const ProfileWizardModel_1 = require("./profileWizard/ProfileWizardModel");
const AllFormStatus_1 = require("../../components/extras/forms/AllFormStatus/AllFormStatus");
const DailyTasksMainPage_1 = require("../../components/extras/dailyTasks/DailyTasksMainPage/DailyTasksMainPage");
const childModels = {
    profileWizard: (onSubmitProfile) => new ProfileWizardModel_1.ProfileWizardModel(onSubmitProfile)
};
class ExtraPortalModel {
    constructor() {
        this.mainViewName = 'ExtraPortal.DailyTasks';
        this.setProfile = (profile) => {
            this.profile = profile;
            console.log(this.profile);
            console.log(mobx_1.isObservable(this.profile));
        };
        this.onSubmitProfile = () => {
            this.wizardResults = { firstName: 'Steve' };
            console.log(this);
            this.profile = { firstName: 'Steve' };
            console.log(this.profile);
        };
        this.autoViewSet = () => {
            mobx_1.autorun(() => {
                if (!this.hasCompletedProfile) {
                    console.log('Going to profile wizard');
                    this.setView('ExtraPortal.ProfileWizard', true);
                    return;
                }
                if (this.hasCompletedWizard) {
                    this.setView('ExtraPortal.AllFormStatus', true);
                    return;
                }
            });
        };
        this.addRouterNodeListeners = () => {
            router_1.default.addRouteListener('ExtraPortal.DailyTasks', (toState, fromState) => {
                this.mainViewName = 'ExtraPortal.DailyTasks';
            });
            router_1.default.addRouteListener('ExtraPortal.AllFormStatus', (toState, fromState) => {
                this.mainViewName = 'ExtraPortal.AllFormStatus';
            });
            router_1.default.addRouteListener('ExtraPortal.ProfileWizard', (toState, fromState) => {
                this.mainViewName = 'ExtraPortal.ProfileWizard';
            });
        };
        this.setView = (viewName, withHistory) => {
            if (withHistory) {
                console.log(viewName);
                router_1.default.navigate(viewName, {}, { reload: true }, (err, state) => {
                    console.log(state);
                    console.error(err);
                });
            }
        };
        console.log(router_1.default);
        this.addRouterNodeListeners();
        this.autoViewSet();
        console.log(this.profile);
    }
    get hasCompletedProfile() {
        return !!this.profile;
    }
    get hasCompletedWizard() {
        console.log(this.wizardResults);
        return !!this.wizardResults;
    }
    get mainView() {
        console.log(this.mainViewName);
        switch (this.mainViewName) {
            case 'ExtraPortal.ProfileWizard':
                const model = childModels.profileWizard(this.onSubmitProfile);
                return ProfileWizard_1.default(model);
            case 'ExtraPortal.AllFormStatus':
                const navDailyTasks = () => this.setView('ExtraPortal.DailyTasks', true);
                const view = AllFormStatus_1.default({ navDailyTasks });
                console.log(view);
                return view;
            default:
                return DailyTasksMainPage_1.default({});
        }
    }
}
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], ExtraPortalModel.prototype, "profile", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", Object)
], ExtraPortalModel.prototype, "wizardResults", void 0);
__decorate([
    mobx_1.observable,
    __metadata("design:type", String)
], ExtraPortalModel.prototype, "mainViewName", void 0);
__decorate([
    mobx_1.action,
    __metadata("design:type", Object)
], ExtraPortalModel.prototype, "setProfile", void 0);
__decorate([
    mobx_1.action,
    __metadata("design:type", Object)
], ExtraPortalModel.prototype, "onSubmitProfile", void 0);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ExtraPortalModel.prototype, "hasCompletedProfile", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ExtraPortalModel.prototype, "hasCompletedWizard", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ExtraPortalModel.prototype, "mainView", null);
exports.ExtraPortalModel = ExtraPortalModel;
//# sourceMappingURL=ExtraPortalModel.js.map