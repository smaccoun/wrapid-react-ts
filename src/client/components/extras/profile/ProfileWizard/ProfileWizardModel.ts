import {observable, computed, action, autorun} from 'mobx'

import {fields, plugins} from '../fields/fields'

export class ProfileWizardStep {
  title: string
  isComplete: () => boolean
  fields: any

  constructor(title: string, fields: any, isComplete?: () => boolean){
    this.title = title;
    const defaultIsComplete = () => false;
    this.isComplete = isComplete || defaultIsComplete;
    this.fields = fields;
  }
};

const nameFields = {userName: fields.userNameField, password: fields.passwordField}
const emailFields = {email: fields.emailField}
const firstStep = new ProfileWizardStep('Names', nameFields)
const secondStep = new ProfileWizardStep('Email', emailFields)
const wizardSteps: Array<ProfileWizardStep> = [firstStep, secondStep]

export class ProfileWizardModel {

  @observable currentStepIdx: number = 0;

  @computed get currentStep(): ProfileWizardStep {
    console.log(this.currentStepIdx)
    console.log(this.wizardSteps)
    return this.wizardSteps[this.currentStepIdx]
  }

  @computed get isLastStep(): boolean {
    return this.currentStepIdx == this.wizardSteps.length - 1
  }

  @action incrementStep = (): void => {
    if(!this.isLastStep){
      this.currentStepIdx = this.currentStepIdx + 1;
    }
    console.log(this.currentStepIdx)
  }

  @action decrementStep = (): void => {
    this.currentStepIdx  = this.currentStepIdx - 1;
  }

  get wizardSteps(): Array<ProfileWizardStep> {
    return wizardSteps
  }

  constructor() {

  }
}
