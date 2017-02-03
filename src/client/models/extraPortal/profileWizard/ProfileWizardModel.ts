import {observable, computed, action, toJS} from 'mobx'
import {findIndex} from 'ramda'

import {ProfileModel, ProfileSectionModel} from "../../profiles/ProfileModel";

export class ProfileWizardStep {
  title: string
  sectionModel: ProfileSectionModel
  @observable isComplete = false;

  @action setIsComplete = (isComplete: boolean): void => {
    // if(!this.sectionModel.isComplete()){
    //   return;
    // }

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
    console.error('WIZARD STEPS!!!!', toJS(this.wizardSteps))
    const isStepComplete = (s: ProfileWizardStep) => {
      console.log(s.isComplete)
      return s.isComplete
    }
    const firstCompleteStep = findIndex(isStepComplete, this.wizardSteps);
    console.log(firstCompleteStep)
    const nextStep = firstCompleteStep + 1;
    console.log(nextStep)
    return nextStep
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

  @computed get isComplete(): boolean {
    console.log(this.wizardSteps)
    return false;
    // for(let i in this.wizardSteps){
    //   const step = this.wizardSteps[i];
    //   if(!step.isComplete){
    //     return false;
    //   }
    // }
    //
    // return true;
  }

  @action incrementStep = (): void => {
    console.log(this.isLastStep)
    if(this.isLastStep){
      this.onSubmitProfile();
      return;
    }

    this.currentStep.setIsComplete(true);
    console.log(this.currentStep)
  }

  @action decrementStep = (): void => {
    this.currentStep.setIsComplete(false);
  }


}
