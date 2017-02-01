import {observable, computed, action, autorun, toJS, isObservable} from 'mobx'
import Router from '../../../router/router'

import viewProfileWizard from '../../components/extras/profile/ProfileWizard/ProfileWizard'
import {ProfileWizardModel} from './profileWizard/ProfileWizardModel'

import viewAllFormStatus from '../../components/extras/forms/AllFormStatus/AllFormStatus'

import viewDailyTasks from '../../components/extras/dailyTasks/DailyTasksMainPage/DailyTasksMainPage'
import {fetchProfile} from '../../../server/api/queries/queries'
import {ExtraProfileModel} from "./profileWizard/ExtraProfileModel";

const loadProfileWizardModel = () => {
  const extraProfileModel = new ExtraProfileModel();
  console.log(extraProfileModel)
  const wizardModel = new ProfileWizardModel(extraProfileModel)
  console.log(wizardModel)
  return wizardModel;
}
const childModels = {
  extraProfileWizard: () => loadProfileWizardModel()
}

const VIEW_NAMES = {
  profileWizard: 'ExtraPortal.ProfileWizard',
  dailyTasks: 'ExtraPortal.DailyTasks',
  allFormStatus: 'ExtraPortal.AllFormStatus'
}

export class ExtraPortalModel {

  constructor() {
    this.loadProfile();
    this.addRouterNodeListeners();
    this.autoViewSet();
  }

  private loadProfile = () => {
    this.profile = new ExtraProfileModel();
  }

  @observable profile: ExtraProfileModel;
  @observable wizardResults: any;
  @observable mainViewName: string = VIEW_NAMES.dailyTasks;


  @action onSubmitProfile = () => {
    this.wizardResults = {firstName: 'Steve'}
    console.log(this.profile);
  }



  @computed get hasCompletedWizard() {
    console.log(this.wizardResults)
    return !!this.wizardResults
  }

  autoViewSet = (): void => {
    autorun(() => {
      if(!this.profile || !this.profile.isComplete()) {
        console.log('Going to profile wizard')
        this.setView(VIEW_NAMES.profileWizard, true)
        return;
      }

      if(this.hasCompletedWizard){
        this.setView(VIEW_NAMES.allFormStatus, true)
        return;
      }
    })
  }

  addRouterNodeListeners = (): void => {
    Router.addRouteListener(VIEW_NAMES.dailyTasks, (toState: any, fromState: any) => {
      this.mainViewName = VIEW_NAMES.dailyTasks;
    });

    Router.addRouteListener(VIEW_NAMES.allFormStatus, (toState: any, fromState: any) => {
      this.mainViewName = VIEW_NAMES.allFormStatus;
    })

    Router.addRouteListener(VIEW_NAMES.profileWizard, (toState: any, fromState: any) => {
      this.mainViewName = VIEW_NAMES.profileWizard;
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
      case VIEW_NAMES.profileWizard:
        const model = childModels.extraProfileWizard()
        return viewProfileWizard(model);
      case VIEW_NAMES.dailyTasks:
        const navDailyTasks = () => this.setView(VIEW_NAMES.dailyTasks, true)
        const view = viewAllFormStatus({navDailyTasks})
        console.log(view);
        return view;
      default:
        return viewDailyTasks({})
    }
  }




}
