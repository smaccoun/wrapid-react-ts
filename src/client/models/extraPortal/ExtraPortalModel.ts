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
    this.addRouterNodeListeners();
    this.autoViewSet();
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
        console.log('Going to profile wizard')
        this.setView('ExtraPortal.ProfileWizard', true)
        return;
      }

      if(this.hasCompletedWizard){
        this.setView('ExtraPortal.AllFormStatus', true)
        return;
      }
    })
  }

  addRouterNodeListeners = (): void => {
    Router.addRouteListener('ExtraPortal.DailyTasks', (toState: any, fromState: any) => {
      this.mainViewName = 'ExtraPortal.DailyTasks';
    });

    Router.addRouteListener('ExtraPortal.AllFormStatus', (toState: any, fromState: any) => {
      this.mainViewName = 'ExtraPortal.AllFormStatus';
    })

    Router.addRouteListener('ExtraPortal.ProfileWizard', (toState: any, fromState: any) => {
      this.mainViewName = 'ExtraPortal.ProfileWizard';
    })

  }

  setView = (viewName: string, withHistory?: boolean): void => {
    if(withHistory){
      console.log(viewName)
      Router.navigate(viewName, {}, {reload: true}, (err, state) => {
        console.log(state);
        console.error(err)
      });
    }

  }

  @computed get mainView(): any {
    console.log(this.mainViewName);
    switch(this.mainViewName){
      case 'ExtraPortal.ProfileWizard':
        const model = childModels.profileWizard(this.onSubmitProfile)
        return viewProfileWizard(model);
      case 'ExtraPortal.AllFormStatus':
        const navDailyTasks = () => this.setView('ExtraPortal.DailyTasks', true)
        const view = viewAllFormStatus({navDailyTasks})
        console.log(view);
        return view;
      default:
        return viewDailyTasks({})
    }
  }




}
