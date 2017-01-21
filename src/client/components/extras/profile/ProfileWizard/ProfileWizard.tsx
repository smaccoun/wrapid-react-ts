import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Fields from '../fields/fields'
import ContentForm from './ContentForm/ContentForm'

const {fields, plugins} = Fields;
// const form: any = new ContentForm({ fields }, { plugins });

class ProfileWizard extends React.Component<{}, {}>{

  public render() {
    return(
      <div>
        <h1>Profile Wizard</h1>
        <ContentForm />
      </div>
    )
  }
}

export default ProfileWizard
