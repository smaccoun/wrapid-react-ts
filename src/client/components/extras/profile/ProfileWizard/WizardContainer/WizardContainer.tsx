import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import {observer} from 'mobx-react'

import ProfileWizardContent from '../Content/ProfileWizardContent'
import FlatButton from 'material-ui/FlatButton';

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
      <div className={s.footer}>
        <FlatButton
          style={{color: '#50E3C2'}}
          label={advButtonMsg}
          onClick={model.incrementStep}
        />
      </div>
    </div>
  )
})

export default WizardContainer
