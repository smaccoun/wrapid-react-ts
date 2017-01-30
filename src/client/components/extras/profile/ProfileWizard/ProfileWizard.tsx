import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import {observer} from 'mobx-react'

import WizardContainer from './WizardContainer/WizardContainer'
import {ProfileWizardModel} from "../../../../models/extraPortal/profileWizard/ProfileWizardModel";


interface Props {
  model: ProfileWizardModel
}

const ProfileWizard = observer((props: Props) => {

  return(
    <div>
      <div className={s.heading}>
        <span className={s.heading_text}>Please fill out info</span>
      </div>
      <WizardContainer model={props.model} />
    </div>
  )
})

const viewProfileWizard = (model : any) => {
  return class PP extends React.Component<{}, {}> {
    render(){
      return(
        <ProfileWizard model={model} />
      )
    }
  }
}

export default viewProfileWizard
