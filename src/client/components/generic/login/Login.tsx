import * as React from 'react';
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import {ValidMaterialForm} from "../webForms/ValidMaterialForm";
import {Field, fields} from "../webForms/fields";

const loginFields: Array<Field> = [fields.userNameField, fields.passwordField]

@observer
class Login extends React.Component<{}, {}> {

  @observable usernameInput: String | null = '';

  @action setUserNameInput = (e: any) => {
    console.log(e.target.value);
    this.usernameInput = e.target.value;
  }

  public render() {
    return(
      <div>
         <ValidMaterialForm fields={loginFields}/>
      </div>
    )
  }
}

export default Login
