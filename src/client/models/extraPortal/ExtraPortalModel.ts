import {observable, computed, action, autorun, toJS, isObservable} from 'mobx'
import gqlSDK from '../../../server/connect/graphcoolConnect'
import {gqlGetExtra} from '../../../server/api/queries/queries'
import Router from '../../../router/router'
import {isEmpty} from 'ramda'

import viewProfileWizard from '../../components/extras/profile/ProfileWizard/ProfileWizard'
import {ProfileWizardModel} from './profileWizard/ProfileWizardModel'

import viewAllFormStatus from '../../components/extras/forms/AllFormStatus/AllFormStatus'

import viewDailyTasks from '../../components/extras/dailyTasks/DailyTasksMainPage/DailyTasksMainPage'

const childModels = {
  profileWizard: (onSubmitProfile?: () => void) => new ProfileWizardModel(onSubmitProfile)
}

type ExtraProfile = any;



export class ExtraPortalModel {

  constructor() {
    console.log(Router);
    this.autoViewSet();
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
  @observable mainViewName: string = 'ExtraPortal.DailyTasks';

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

  autoViewSet = (): void => {
    autorun(() => {
      if(!this.hasCompletedProfile) {
        this.userSetView('ExtraPortal.ProfileWizard', true)
      }
      else if(this.hasCompletedWizard){
        this.userSetView('ExtraPortal.AllFormStatus', true)
      }
      else{
        this.userSetView('ExtraPortal.DailyTasks', true)
      }
    })
  }

  routeListener = (fromState: any, toState: any): void => {
    console.log(fromState);
    console.log(toState);
    // if(this.mainViewName != toState.name){
    //   console.log('Auto setting!')
    //   this.mainViewName = toState.name;
    // }
  }

  @action
  userSetView = (viewName: string, withHistory?: boolean): void => {
    this.mainViewName = viewName;
    if(withHistory){
      Router.navigate(viewName, {reload: true});
    }

  }

  @computed get mainView(): any {
    console.log(this.mainViewName);
    switch(this.mainViewName){
      case 'ExtraPortal.ProfileWizard':
        const model = childModels.profileWizard(this.onSubmitProfile)
        return viewProfileWizard(model);
      case 'ExtraPortal.AllFormStatus':
        const navDailyTasks = () => this.userSetView('ExtraPortal.DailyTasks', true)
        const view = viewAllFormStatus({navDailyTasks})
        console.log(view);
        return view;
      default:
        return viewDailyTasks({})
    }
  }




}
