import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import TextField from 'material-ui/TextField';

interface Props {
  fields: any
}

const onInput = (e: any, fieldLabel: string): void => {
  console.log(e.target.value);
  console.log(fieldLabel);
}

const ProfileWizardContent = (props: Props) => {
    return(
      <div className={s.container}>
        {Object.keys(props.fields).map((fieldKey, key) => {
          console.log(fieldKey)
          const field=props.fields[fieldKey]
          return(
              <TextField
                key={field.label}
                id={field.label}
                floatingLabelText={field.label}
                onChange={(e: any) => onInput(e, field.label)}
              />
          )
        })}
      </div>
    )
}

export default ProfileWizardContent
