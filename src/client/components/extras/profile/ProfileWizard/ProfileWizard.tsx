import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {observer} from 'mobx-react'

import ProfileWizardContent from './Content/ProfileWizardContent'
import {ProfileWizardModel} from './ProfileWizardModel'
import RaisedButton from 'material-ui/RaisedButton';

// const form: any = new ContentForm({ fields }, { plugins });


interface Props {
  model: any
}

const ProfileWizard = observer((props: Props) => {

  const model = props.model
  const currentStep = model.currentStep;
  console.log(currentStep)
  return(
    <div>
      <h1>{currentStep.title}</h1>
      <ProfileWizardContent fields={currentStep.fields}/>
      <RaisedButton label="Next" onClick={model.incrementStep}/>
    </div>
  )
})

const viewProfileWizard = () => {
  const model = new ProfileWizardModel();
  return class PP extends React.Component<{}, {}> {
    render(){
      return(
        <ProfileWizard model={model} />
      )
    }
  }
}

export default viewProfileWizard
