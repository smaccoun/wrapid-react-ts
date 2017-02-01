import {observable, computed, action, toJS} from 'mobx'
import {findIndex} from 'ramda'

import {ProfileModel, ProfileSectionModel} from "../../profiles/ProfileModel";

export class ProfileWizardStep {
  title: string
  sectionModel: ProfileSectionModel
  isComplete = false;

  setIsComplete = (isComplete: boolean): void => {
    if(!this.sectionModel.isComplete()){
      return;
    }

    this.isComplete = isComplete
  }

  constructor(title: string, profileSectionModel: ProfileSectionModel){
    this.title = title;
    this.sectionModel = profileSectionModel
  }
};


export class ProfileWizardModel {

  constructor(profile: ProfileModel) {
    console.log(profile);
    this.setProfileSteps(profile);
  }


  setProfileSteps = (profile: ProfileModel): void => {
    console.log(profile);
    this.wizardSteps = profile.sections.map(section => {
      console.log(section);
      return new ProfileWizardStep(section.title, section)
    })


    console.log(toJS(this.wizardSteps))
  }

  @observable wizardSteps: Array<ProfileWizardStep>;
  onSubmitProfile: () => void;

  @computed get currentStepIdx(): number {
    if(!this.wizardSteps){
      return 0;
    }
    const isStepComplete = (s: ProfileWizardStep) => s.sectionModel.isComplete()
    const firstCompleteStep = findIndex(isStepComplete, this.wizardSteps);
    console.log(firstCompleteStep)
    return firstCompleteStep > 0 ? firstCompleteStep : 0
  }

  @computed get currentStep(): ProfileWizardStep {
    console.log(this.wizardSteps)
    if(!this.wizardSteps){
      return null;
    }
    console.log('CURSTEPIDX!', this.currentStepIdx)
    return this.wizardSteps[this.currentStepIdx]
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

    this.currentStep.setIsComplete(true);
  }

  @action decrementStep = (): void => {
    this.currentStep.setIsComplete(false);
  }


}
