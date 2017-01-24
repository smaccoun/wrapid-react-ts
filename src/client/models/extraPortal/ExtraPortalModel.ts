import {observable, computed, action, autorun, toJS, isObservable} from 'mobx'
import gqlSDK from '../../../server/connect/graphcoolConnect'
import {gqlGetExtra} from '../../../server/api/queries/queries'
import Router from '../../../router/router'

import viewProfileWizard from '../../components/extras/profile/ProfileWizard/ProfileWizard'
import {ProfileWizardModel} from './profileWizard/ProfileWizardModel'

import AllFormStatus from '../../components/extras/forms/AllFormStatus/AllFormStatus'

const childModels = {
  profileWizard: (onSubmitProfile?: () => void) => new ProfileWizardModel(onSubmitProfile)
}

type ExtraProfile = any;

export class ExtraPortalModel {

  constructor() {
    console.log(Router);
    Router.addListener(this.routeListener)

    // const profileStore = observable({
    //   profile: observable.ref(null),
    //   hasCompleted: computed(function() {
    //     return !!this.profile;
    //   }),
    //   setProfile: action.bound(function() {
    //     this.profile = {firstName: 'steve'}
    //   })
    // })
  }

  @observable.ref profile: ExtraProfile;
  @observable.ref wizardResults: any;

  @computed get hasCompletedProfile(): boolean{
    console.log(!!this.profile)
    return !!this.profile;
  }

  @action setProfile = (profile: ExtraProfile): void => {
    this.profile = profile;
    console.log(this.profile);
    console.log(isObservable(this.profile))
  }

  @action onSubmitProfile = () => {
    this.wizardResults = {firstName: 'Steve'}
    this.setProfile(this.wizardResults)
    console.log(this.profile);
  }

  @computed get hasCompletedWizard() {
    console.log(this.wizardResults)
    return !!this.wizardResults
  }

  @computed get mainViewName(): string {
    console.log(this.hasCompletedProfile)
    console.log(this.hasCompletedWizard)
    if(!this.hasCompletedProfile) {
      return 'ProfileWizard'
    }
    else if(this.hasCompletedWizard){
      return 'AllFormStatus'
    }
    else{
      return 'DailyTasks'
    }
  }

  @computed get mainView(): any {
    console.log(this.mainViewName);
    switch(this.mainViewName){
      case 'ProfileWizard':
        const model = childModels.profileWizard(this.onSubmitProfile)
        return viewProfileWizard(model);
      case 'AllFormStatus':
        return AllFormStatus
    }
  }

  routeListener = (toState: any, fromState: any) => {
    console.log(toState.name);
    console.log(fromState);
  }


}
