import * as React from 'react';
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import {ValidFormStateHandler, ValidMaterialForm} from "../webForms/ValidMaterialForm";
import {Field, fields} from "../webForms/fields";
import Dashboard from "../layouts/dashboard/Dashboard/Dashboard";
import RaisedButton from 'material-ui/FlatButton';

const loginFields: Array<Field> = [fields.userNameField, fields.passwordField]

console.log(ValidFormStateHandler)

@observer
class Login extends React.Component<{submitLogin: (userName: string, password: string) => void}, {}> {


  public render() {
      // const onAdvance = (allInputs: Array<any>) => {
      //     console.log('All inputs', allInputs)
      //     this.props.submitLogin('Steve', 'blahdawg')
      // }
      // const advanceSection = {
      //     SubmitComponent: SubmitSection,
      //     onAdvance
      // }

      const formState = new ValidFormStateHandler(loginFields);
      console.log(formState);

    return(
      <Dashboard>
         <ValidMaterialForm allInputs={formState.allInputs}/>
          {formState.areAllInputsValid ? <button>Next</button> : <div>Enter stuff yo!</div>}
      </Dashboard>
    )
  }
}

interface SubmitProps {
    onClick: () => void
}

const SubmitSection: React.StatelessComponent<{}> = (props: SubmitProps) => {
    return(
        <RaisedButton
            style={{color: '#50E3C2'}}
            label={"Submit"}
            onClick={props.onClick}
        />
    )
}

export default Login
