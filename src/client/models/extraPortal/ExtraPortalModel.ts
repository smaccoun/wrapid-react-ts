import {observable, computed, action, autorun, toJS, isObservable, extendObservable, when} from 'mobx'
import Router from '../../../router/router'

import {ProfileWizardModel} from './profileWizard/ProfileWizardModel'
import {ExtraProfileModel} from "./profileWizard/ExtraProfileModel";
import {fromPromise, FULFILLED, IPromiseBasedObservable, PENDING, REJECTED} from "mobx-utils";

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
    this.setInitialState();
    this.addRouteListeners();

  }

  setInitialState = () => {
    when(
      () => this.extraInfo.state == "fulfilled",
      () => {

        this.hasLoadedInitialData = true;
        const model = new ProfileWizardModel(this.extraInfo.value.profile)
        this.mainModelView = {viewName: VIEW_NAMES.PROFILE_WIZARD, model}
        console.error('GOT YOU A PROFILE!!!!', this.profile)

      }
    )
    when(
      () => this.extraInfo.state != "fulfilled",
      () => {
        switch(this.extraInfo.state){
          case PENDING:
            this.mainModelView = {viewName: VIEW_NAMES.LOADING}
            break;
          case REJECTED:
            this.mainModelView = {viewName: VIEW_NAMES.ERROR}
            break;
        }
      }
    )
  }


  @observable hasLoadedInitialData: boolean = false;
  @observable curRoute: string = 'ExtraPortal.ProfileWizard';
  @observable profile: ExtraProfileModel;

  @computed get isProfileComplete(): boolean {
    if(this.profile){
      console.error('CHECKING FOR PROFILE COMPLETION!!!!', this.profile.isComplete)
      return this.profile.isComplete
    }

    return false;
  }

  @observable mainModelView: ModelView = {viewName: VIEW_NAMES.LOADING}



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
