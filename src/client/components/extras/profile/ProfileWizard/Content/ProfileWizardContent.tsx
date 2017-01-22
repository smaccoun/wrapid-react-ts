import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import TextField from 'material-ui/TextField';

import {Field} from '../../fields/fields'

interface Props {
  fields: any
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
              />
          )
        })}
      </div>
    )
}

export default ProfileWizardContent
