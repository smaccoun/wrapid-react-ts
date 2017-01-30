import * as React from 'react';
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import {ValidMaterialForm} from "../webForms/ValidMaterialForm";
import {Field, fields} from "../webForms/fields";
import Dashboard from "../layouts/dashboard/Dashboard/Dashboard";
import RaisedButton from 'material-ui/FlatButton';

const loginFields: Array<Field> = [fields.userNameField, fields.passwordField]



@observer
class Login extends React.Component<{submitLogin: (userName: string, password: string) => void}, {}> {


  public render() {
      const onAdvance = (allInputs: Array<any>) => {
          console.log('All inputs', allInputs)
          this.props.submitLogin('Steve', 'blahdawg')
      }
      const advanceSection = {
          SubmitComponent: SubmitSection,
          onAdvance
      }

    return(
      <Dashboard>
         <ValidMaterialForm fields={loginFields} advanceSection={advanceSection}/>
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
