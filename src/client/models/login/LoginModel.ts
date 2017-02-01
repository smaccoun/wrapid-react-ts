import {observable, action} from 'mobx'
import {ValidFormModel} from "../webForm/ValidFormModel";
import {userNameField, passwordField} from '../../components/generic/webForms/fields'


export class LoginModel {

  constructor(onSubmitLogin: (username: string, password: string) => void) {
    this.loginForm = new ValidFormModel([userNameField, passwordField])
    this.submitLogin = () => {
      const allInputs = this.loginForm.allInputs
      const usernameInput = allInputs[userNameField.label].curInput
      const passwordInput = allInputs[passwordField.label].curInput
      onSubmitLogin(usernameInput, passwordInput)
    }
  }


  submitLogin: () => void

  loginForm: ValidFormModel

}
