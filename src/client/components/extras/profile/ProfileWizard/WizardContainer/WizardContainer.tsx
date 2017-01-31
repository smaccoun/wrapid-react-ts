import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import {observer} from 'mobx-react'

import ProfileWizardContent from '../Content/ProfileWizardContent'
import {ProfileWizardModel} from "../../../../../models/extraPortal/profileWizard/ProfileWizardModel";

// const form: any = new ContentForm({ fields }, { plugins });


interface Props {
  model: ProfileWizardModel
}

const WizardContainer = observer((props: Props) => {

  const model = props.model
  const currentStep = model.currentStep;
  console.log(currentStep)
  const advButtonMsg = model.isLastStep ? 'Finish' : 'Next'
  return(
    <div className={s.container}>
      <ProfileWizardContent model={model}/>
    </div>
  )
})

export default WizardContainer
