import * as React from 'react';
import {observer} from 'mobx-react'

import Dashboard from '../../generic/layouts/dashboard/Dashboard/Dashboard'
import {ExtraPortalModel} from '../../../models/extraPortal/ExtraPortalModel'
const extraPortalModel = new ExtraPortalModel();

@observer
class ExtraPortal extends React.Component<{}, {}>{

  public render() {
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
