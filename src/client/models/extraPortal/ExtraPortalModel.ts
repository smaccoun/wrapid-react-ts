import {observable, computed, action, autorun, toJS, isObservable, extendObservable, when} from 'mobx'
import Router from '../../../router/router'

import {ProfileWizardModel} from './profileWizard/ProfileWizardModel'
import {ExtraProfileModel} from "./profileWizard/ExtraProfileModel";
import {fromPromise, IPromiseBasedObservable} from "mobx-utils";

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

const ExtraPortalRoutes = {
  profileWizard: 'ExtraPortal.ProfileWizard',
  dailyTasks: 'ExtraPortal.DailyTasks',
  allFormStatus: 'ExtraPortal.AllFormStatus'

}

class ExtraInfo {
  profile: ExtraProfileModel
}

const loadExtraInfo = (): Promise<ExtraInfo> => {
  return new Promise((resolve, reject) => {
    const profile = new ExtraProfileModel()
    resolve({profile})
  })
}

export enum VIEW_NAMES {
  LOADING,
  ERROR,
  PROFILE_WIZARD,
  DAILY_TASKS,
  ALL_FORM_STATUS
}

type ExtraPortalModels = ProfileWizardModel

interface ModelView {
  viewName: VIEW_NAMES
  model?: ExtraPortalModels
}


export class ExtraPortalModel {

  constructor() {
    this.loadExtraInfo();
    when(
      () => this.extraInfo.state == "fulfilled",
      () => {
        this.initialLoadComplete = true;
      }
    )
    this.addRouteListeners();

  }

  @observable curRoute: string = 'ExtraPortal.ProfileWizard';
  @observable initialLoadComplete: boolean = false;


  @computed get mainModelView(): ModelView {
    if(this.initialLoadComplete){
      const extraInfo = toJS(this.extraInfo.value);
      return this.getViewState(extraInfo)
    }
    else{
      switch(this.extraInfo.state){
        case "pending": return {viewName: VIEW_NAMES.LOADING}
        case "rejected": return {viewName: VIEW_NAMES.ERROR}
      }
    }


  }

  getViewState = (extraInfo: ExtraInfo): ModelView => {
    if(!extraInfo.profile.isComplete){
      const model = new ProfileWizardModel(extraInfo.profile)
      return {viewName: VIEW_NAMES.PROFILE_WIZARD, model}
    }
    return {viewName: VIEW_NAMES.DAILY_TASKS};
  }

  @action loadExtraInfo = () => {
    this.extraInfo = fromPromise(loadExtraInfo());
  }
  extraInfo: IPromiseBasedObservable<ExtraInfo>

  @observable wizardResults: any;


  @action onSubmitProfile = () => {
    this.wizardResults = {firstName: 'Steve'}
  }



  @computed get hasCompletedWizard() {
    return !!this.wizardResults
  }

  @action setCurRoute = (route: string): void => {
    this.curRoute = route
  }

  addRouteListeners = (): void => {
    Router.addRouteListener(ExtraPortalRoutes.dailyTasks, (toState: any, fromState: any) => {
      this.setCurRoute(ExtraPortalRoutes.dailyTasks)
    });

    Router.addRouteListener(ExtraPortalRoutes.allFormStatus, (toState: any, fromState: any) => {
      this.setCurRoute(ExtraPortalRoutes.allFormStatus);
    })

    Router.addRouteListener(ExtraPortalRoutes.profileWizard, (toState: any, fromState: any) => {
      this.setCurRoute(ExtraPortalRoutes.profileWizard);
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





}
