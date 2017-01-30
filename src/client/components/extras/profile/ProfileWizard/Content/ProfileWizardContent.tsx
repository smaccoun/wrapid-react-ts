import * as React from 'react';
import {ValidMaterialForm, ValidFormStateHandler} from "../../../../generic/webForms/ValidMaterialForm";
import {Field} from "../../../../generic/webForms/fields";

const s = require('./style.css')

import FlatButton from 'material-ui/FlatButton';
import {ProfileWizardModel} from "../../../../../models/extraPortal/profileWizard/ProfileWizardModel";


interface Props {
  model: ProfileWizardModel
}

const ProfileWizardContent = (props: Props) => {

    const model = props.model;
    const currentStep = model.currentStep;
    const formState = new ValidFormStateHandler(currentStep.fields);
    console.log(currentStep)
    const advButtonMsg = model.isLastStep ? 'Finish' : 'Next'
    return(
      <div className={s.container}>
        <ValidMaterialForm allInputs={formState.allInputs}/>
          <div className={s.footer}>
              <FlatButton
                  style={{color: '#50E3C2'}}
                  label={advButtonMsg}
                  onClick={() => model.incrementStep()}
              />
          </div>
      </div>
    )
}


export default ProfileWizardContent
