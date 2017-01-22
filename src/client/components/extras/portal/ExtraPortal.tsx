import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Dashboard from '../../generic/layouts/dashboard/Dashboard/Dashboard'
import ProfileWizard from '../profile/ProfileWizard/ProfileWizard'
import {ExtraPortalModel} from '../../../models/extraPortal/ExtraPortalModel'
const extraPortalModel = new ExtraPortalModel();

class ExtraPortal extends React.Component<{}, {}>{

  public render() {
    const form = {meow: 'meow'}
    console.log(extraPortalModel)
    const MainView = extraPortalModel.mainView;
    return(
      <Dashboard>
        <h1>Welcome extra! </h1>
        <MainView />
      </Dashboard>
    )
  }
}

export default ExtraPortal
