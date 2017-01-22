import {observable, computed, action, autorun} from 'mobx'

import viewProfileWizard from '../../components/extras/profile/ProfileWizard/ProfileWizard'


export class ExtraPortalModel {

  @observable profile: any = null;
  mainView: any

  @computed get hasCompletedProfile(): boolean{
    return false;
  }

  autoSetMainView = (): void => {
    autorun(() => {
      console.log(this.hasCompletedProfile)
      if(!this.hasCompletedProfile) {
        this.mainView = viewProfileWizard()
        console.log(this.mainView)
        return;
      }
    })
  }

  constructor() {
    this.autoSetMainView();
  }
}
