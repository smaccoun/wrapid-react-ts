import * as React from 'react';
import {ValidMaterialForm} from "../../../../generic/webForms/ValidMaterialForm";
import {Field} from "../../../../generic/webForms/fields";

const s = require('./style.css')

import FlatButton from 'material-ui/FlatButton';
import {ProfileWizardModel} from "../../../../../models/extraPortal/profileWizard/ProfileWizardModel";
import DefaultPanel from "../../../../generic/panels/DefaultPanel/DefaultPanel";
import {ValidFormModel} from "../../../../../models/webForm/ValidFormModel";
import {observer} from "mobx-react";


interface Props {
  model: ProfileWizardModel
}

@observer
class ProfileWizardContent extends React.Component<Props, {}> {

  getStepProps = (model: ProfileWizardModel) => {
    const currentStep = model.currentStep;
    if(!currentStep){
      return null;
    }

    const formState = model.currentStep.sectionModel.validForm
    const allInputs = formState.allInputs;
    console.log(currentStep)
    const advButtonMsg = model.isLastStep ? 'Finish' : 'Next'
    const headerItems = [currentStep.title]
    const footer = <Footer buttonLabel={advButtonMsg} onNext={() => model.incrementStep()}/>

    return {allInputs, headerItems, footer}
  }

  render(){
    const {model} = this.props;
    const currentStep = model.currentStep;
    console.error('CURRENT STEP!', currentStep)
    const sp = this.getStepProps(model);
    console.log(sp);


    return(
      <div>
        {sp ?
          <DefaultPanel headerItems={sp.headerItems} footer={sp.footer}>
            <ValidMaterialForm allInputs={sp.allInputs}/>
          </DefaultPanel>
          :
          <div>...Loading</div>
        }
      </div>

    )
  }

}

interface FooterProps {
    buttonLabel: string,
    onNext: () => void
}
const Footer: React.StatelessComponent<FooterProps> = (props: FooterProps) => {
    return(
        <div className={s.footer}>
            <FlatButton
                style={{color: '#50E3C2'}}
                label={props.buttonLabel}
                onClick={props.onNext}
            />
        </div>
    )
}


export default ProfileWizardContent
