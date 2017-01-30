import {observable, computed, action, autorun} from 'mobx'

import Router from '../../router/router'

export enum VIEW_NAMES {
  LOGIN,
  EXTRA_PORTAL,
  PA_PORTAL
}

export enum USER_TYPE {
  EXTRA,
  PA
}


export class AppModel {

  constructor() {
    this.autoRoute();
  }

  autoRoute = () => {
    autorun(() => {
      switch(this.viewName){
        case VIEW_NAMES.LOGIN:
          Router.navigate('Login')
        case VIEW_NAMES.EXTRA_PORTAL:
          Router.navigate('/ExtraPortal');
          break;
        default:
          Router.navigate('Login')
      }
    })
  }

  @observable loginToken: any;

  @computed get isLoggedIn():boolean {
    return !!this.loginToken
  }

  @action submitLogin = (userName: string, password: string) => {
    this.loginToken = {userName, password};
    console.log(this.loginToken)
  }

  @computed get userType(): USER_TYPE | false {
    if(!this.isLoggedIn){
      return false;
    }

    return USER_TYPE.EXTRA
  }

  @computed get viewName(): VIEW_NAMES {
    if(this.isLoggedIn){
      switch(this.userType){
        case USER_TYPE.EXTRA:
          return VIEW_NAMES.EXTRA_PORTAL;
        case USER_TYPE.PA:
          return VIEW_NAMES.PA_PORTAL;
        default:
          VIEW_NAMES.LOGIN
      }
    }
    else{
      return VIEW_NAMES.LOGIN
    }
  }


}

export default AppModel;
