import * as React from 'react';
import {ValidMaterialForm, ValidFormStateHandler} from "../../../../generic/webForms/ValidMaterialForm";
import {Field} from "../../../../generic/webForms/fields";

const s = require('./style.css')

import FlatButton from 'material-ui/FlatButton';
import {ProfileWizardModel} from "../../../../../models/extraPortal/profileWizard/ProfileWizardModel";
import DefaultPanel from "../../../../generic/panels/DefaultPanel/DefaultPanel";


interface Props {
  model: ProfileWizardModel
}

const ProfileWizardContent = (props: Props) => {

    const model = props.model;
    const currentStep = model.currentStep;
    const formState = new ValidFormStateHandler(currentStep.fields);
    console.log(currentStep)
    const advButtonMsg = model.isLastStep ? 'Finish' : 'Next'
    const headerItems = [currentStep.title]
    const footer = <Footer buttonLabel={advButtonMsg} onNext={() => model.incrementStep()}/>
    return(
        <DefaultPanel headerItems={headerItems} footer={footer}>
            <ValidMaterialForm allInputs={formState.allInputs}/>
        </DefaultPanel>
    )
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
