import * as React from 'react';
import {ValidMaterialForm} from "../../../../generic/webForms/ValidMaterialForm";
import {Field} from "../../../../generic/webForms/fields";

const s = require('./style.css')



interface Props {
  fields: Array<Field>
}

const ProfileWizardContent = (props: Props) => {
    return(
      <div className={s.container}>
        <ValidMaterialForm fields={props.fields}/>
      </div>
    )
}

export default ProfileWizardContent
