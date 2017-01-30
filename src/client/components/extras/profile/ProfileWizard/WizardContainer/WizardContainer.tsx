import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import {observer} from 'mobx-react'

import ProfileWizardContent from '../Content/ProfileWizardContent'

// const form: any = new ContentForm({ fields }, { plugins });


interface Props {
  model: any
}

const WizardContainer = observer((props: Props) => {

  const model = props.model
  const currentStep = model.currentStep;
  console.log(currentStep)
  const advButtonMsg = model.isLastStep ? 'Finish' : 'Next'
  return(
    <div className={s.container}>
      <div className={s.header}>{currentStep.title}</div>
      <ProfileWizardContent fields={currentStep.fields}/>
    </div>
  )
})

export default WizardContainer
