import {observable, action} from 'mobx'

export interface ServerCredentials {

}

export class LoginModel {
  @observable usernameInput: string = '';

}
