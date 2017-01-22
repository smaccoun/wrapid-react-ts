import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TextField from 'material-ui/TextField';

import {Field} from '../../fields/fields'

interface Props {
  fields: any
}

const ProfileWizardContent = (props: Props) => {
    return(
      <div>
        {Object.keys(props.fields).map((fieldKey, key) => {
          const field=props.fields[fieldKey]
          return(
            <div key={key}>
              <TextField id={field.label}>
              </TextField>
            </div>
          )
        })}
      </div>
    )
}

export default ProfileWizardContent
