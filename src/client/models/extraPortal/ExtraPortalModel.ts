import {observable, computed, action, autorun} from 'mobx'
import gqlSDK from '../../../server/connect/graphcoolConnect'
import {gqlGetExtra} from '../../../server/api/queries/queries'

import viewProfileWizard from '../../components/extras/profile/ProfileWizard/ProfileWizard'
import {ProfileWizardModel} from './profileWizard/ProfileWizardModel'

const childModels = {
  profileWizardModel: () => new ProfileWizardModel()
}

type ExtraProfile = any;

export class ExtraPortalModel {

  @observable profile: ExtraProfile = null;

  @computed get hasCompletedProfile(): boolean{
    return false;
  }

  @action setProfile = (profile: ExtraProfile): void => {
    this.profile = profile;
  }

  @computed get mainView(): any {
    console.log(this.hasCompletedProfile)
    if(!this.hasCompletedProfile) {
      const model = childModels.profileWizardModel()
      const mainView = viewProfileWizard(model)
      return mainView;
    }
  }

  constructor() {

  }
}
