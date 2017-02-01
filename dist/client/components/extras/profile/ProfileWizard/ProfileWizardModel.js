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
const fields_1 = require("../fields/fields");
class ProfileWizardStep {
    constructor(title, fields, isComplete) {
        this.title = title;
        const defaultIsComplete = () => false;
        this.isComplete = isComplete || defaultIsComplete;
        this.fields = fields;
    }
}
exports.ProfileWizardStep = ProfileWizardStep;
;
const nameFields = { userName: fields_1.fields.userNameField, password: fields_1.fields.passwordField };
const emailFields = { email: fields_1.fields.emailField };
const signatureField = { signature: fields_1.fields.signature };
const firstStep = new ProfileWizardStep('Personal Info', nameFields);
const secondStep = new ProfileWizardStep('Signature', signatureField);
const wizardSteps = [firstStep, secondStep];
class ProfileWizardModel {
    constructor() {
        this.currentStepIdx = 0;
        this.incrementStep = () => {
            if (!this.isLastStep) {
                this.currentStepIdx = this.currentStepIdx + 1;
            }
            console.log(this.currentStepIdx);
        };
        this.decrementStep = () => {
            this.currentStepIdx = this.currentStepIdx - 1;
        };
    }
    get currentStep() {
        console.log(this.currentStepIdx);
        console.log(this.wizardSteps);
        return this.wizardSteps[this.currentStepIdx];
    }
    get isLastStep() {
        return this.currentStepIdx == this.wizardSteps.length - 1;
    }
    get wizardSteps() {
        return wizardSteps;
    }
}
__decorate([
    mobx_1.observable,
    __metadata("design:type", Number)
], ProfileWizardModel.prototype, "currentStepIdx", void 0);
__decorate([
    mobx_1.computed,
    __metadata("design:type", ProfileWizardStep),
    __metadata("design:paramtypes", [])
], ProfileWizardModel.prototype, "currentStep", null);
__decorate([
    mobx_1.computed,
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], ProfileWizardModel.prototype, "isLastStep", null);
__decorate([
    mobx_1.action,
    __metadata("design:type", Object)
], ProfileWizardModel.prototype, "incrementStep", void 0);
__decorate([
    mobx_1.action,
    __metadata("design:type", Object)
], ProfileWizardModel.prototype, "decrementStep", void 0);
exports.ProfileWizardModel = ProfileWizardModel;
//# sourceMappingURL=ProfileWizardModel.js.map