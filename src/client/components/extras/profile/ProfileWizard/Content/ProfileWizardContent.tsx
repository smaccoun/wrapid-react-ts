import * as React from 'react';
import {ValidMaterialForm, ValidFormStateHandler} from "../../../../generic/webForms/ValidMaterialForm";
import {Field} from "../../../../generic/webForms/fields";

const s = require('./style.css')

import FlatButton from 'material-ui/FlatButton';


interface Props {
  fields: Array<Field>
}

const ProfileWizardContent = (props: Props) => {
    const onAdvance = (allInputs: Array<any>) => console.log(allInputs);
    const model = new ValidFormStateHandler(props.fields);
    return(
      <div className={s.container}>
        <ValidMaterialForm allInputs={model.allInputs}/>
      </div>
    )
}

const AdvComponent: React.StatelessComponent<any> = (onClick) => {
    return(
        <div className={s.footer}>
            <FlatButton
                style={{color: '#50E3C2'}}
                label={'Next'}
                onClick={onClick}
            />
        </div>
    )

}

export default ProfileWizardContent
