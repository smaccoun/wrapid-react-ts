import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Dashboard from '../../generic/layouts/dashboard/Dashboard/Dashboard'
import ProfileWizard from '../profile/ProfileWizard/ProfileWizard'

class ExtraPortal extends React.Component<{}, {}>{

  public render() {
    const form = {meow: 'meow'}
    return(
      <Dashboard>
        <h1>Welcome extra! </h1>
        <ProfileWizard  />
      </Dashboard>
    )
  }
}

export default ExtraPortal
