import {observable, computed, action, autorun, toJS, isObservable} from 'mobx'
import gqlSDK from '../../../server/connect/graphcoolConnect'
import {gqlGetExtra} from '../../../server/api/queries/queries'
import Router from '../../../router/router'
import {isEmpty} from 'ramda'

import viewProfileWizard from '../../components/extras/profile/ProfileWizard/ProfileWizard'
import {ProfileWizardModel} from './profileWizard/ProfileWizardModel'

import viewAllFormStatus from '../../components/extras/forms/AllFormStatus/AllFormStatus'

const childModels = {
  profileWizard: (onSubmitProfile?: () => void) => new ProfileWizardModel(onSubmitProfile)
}

type ExtraProfile = any;



export class ExtraPortalModel {

  constructor() {
    console.log(Router);
    Router.addListener(this.routeListener)
    console.log(this.profile)

    // this.profile = observable({
    //   data: {},
    //   get isCompleted() {
    //     console.log(this.data);
    //     return !isEmpty(this.data)
    //   }
    // });
    //
    // console.log(this.profile);
  }

  @observable profile: ExtraProfile;
  @observable wizardResults: any;

  @action setProfile = (profile: ExtraProfile): void => {
    this.profile = profile;
    console.log(this.profile);
    console.log(isObservable(this.profile))
  }

  @action onSubmitProfile = () => {
    this.wizardResults = {firstName: 'Steve'}
    console.log(this);
    this.profile = {firstName: 'Steve'}
    console.log(this.profile);
  }

  @computed get hasCompletedProfile() {
    return !!this.profile
  }

  @computed get hasCompletedWizard() {
    console.log(this.wizardResults)
    return !!this.wizardResults
  }

  @computed get mainViewName(): string {
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
        const view = viewAllFormStatus({})
        console.log(view);
        return view;
      default:
        return viewAllFormStatus({})
    }
  }

  routeListener = (toState: any, fromState: any) => {
    console.log(toState.name);
    console.log(fromState);
  }


}
