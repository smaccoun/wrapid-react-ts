import {observable} from 'mobx'
import ILoginModel from '../components/generic/login/Login'

import Router from '../../router/router'

export interface AppModel {
  loginModel: ILoginModel | null,
  dashboardModel: null
}

export function initAppModel(): AppModel {
  return {
    loginModel: null,
    dashboardModel: null
  }
}
