import {observable, computed, action, autorun} from 'mobx'

import {fields, plugins} from '../profileFields/fields'
import {Field} from "../../../components/generic/webForms/fields";

export class ProfileWizardStep {
  title: string
  isComplete: () => boolean
  fields: Array<Field>

  constructor(title: string, fields: Array<Field>, isComplete?: () => boolean){
    this.title = title;
    const defaultIsComplete = () => false;
    this.isComplete = isComplete || defaultIsComplete;
    this.fields = fields;
  }
};

const nameFields = [fields.firstNameField, fields.lastNameField, fields.emailField]
const signatureField = [fields.signature]
const firstStep = new ProfileWizardStep('Personal Info', nameFields)
const secondStep = new ProfileWizardStep('Signature', signatureField)
const wizardSteps: Array<ProfileWizardStep> = [firstStep, secondStep]

type ExtraProfile = any;

export class ProfileWizardModel {

  @observable profile: ExtraProfile = null;
  @observable currentStepIdx: number = 0;
  onSubmitProfile: () => void;

  @computed get currentStep(): ProfileWizardStep {
    console.log(this.currentStepIdx)
    console.log(this.wizardSteps)
    const currentStep = this.wizardSteps[this.currentStepIdx];
    console.log(currentStep);
    return currentStep;
  }

  @computed get isLastStep(): boolean {
    console.log(this.currentStepIdx)
    return this.currentStepIdx == this.wizardSteps.length - 1
  }

  @action incrementStep = (): void => {
    console.log(this.isLastStep)
    if(this.isLastStep){
      this.onSubmitProfile();
      return;
    }

    this.currentStepIdx = this.currentStepIdx + 1;
    console.log(this.currentStepIdx)
  }

  @action decrementStep = (): void => {
    this.currentStepIdx  = this.currentStepIdx - 1;
  }

  get wizardSteps(): Array<ProfileWizardStep> {
    return wizardSteps
  }

  constructor(onSubmitProfile?: () => void) {
    this.onSubmitProfile = onSubmitProfile;
  }
}
