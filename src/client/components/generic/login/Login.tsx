import * as React from 'react';
import {observer} from 'mobx-react'

const s = require('./style.css');

import Dashboard from "../layouts/dashboard/Dashboard/Dashboard";
import RaisedButton from 'material-ui/FlatButton';
import DefaultPanel from "../panels/DefaultPanel/DefaultPanel";
import {LoginModel} from "../../../models/login/LoginModel";
import {ValidMaterialForm} from "../webForms/ValidMaterialForm";


class Login extends React.Component<{loginModel: LoginModel}, {}> {


  public render() {
      const {loginModel} = this.props;


    const footer = <SubmitSection onClick={() => loginModel.submitLogin()} />

    return(
      <Dashboard>
          <DefaultPanel headerItems={['Login']} footer={footer} >
             <ValidMaterialForm allInputs={loginModel.loginForm.allInputs}/>
          </DefaultPanel>
      </Dashboard>
    )
  }
}

interface SubmitProps {
    onClick: () => void
}

const SubmitSection: React.StatelessComponent<SubmitProps> = (props: SubmitProps) => {
    return(
        <div className={s.footer}>
            <RaisedButton
                style={{color: '#50E3C2'}}
                label={"Login"}
                onClick={props.onClick}
            />
        </div>
    )
}

const viewLogin = (model: LoginModel) => {
    return <Login loginModel={model} />
}

export default Login
