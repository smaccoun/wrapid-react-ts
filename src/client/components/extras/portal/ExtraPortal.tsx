import * as React from 'react';
import {observer} from 'mobx-react'

import Dashboard from '../../generic/layouts/dashboard/Dashboard/Dashboard'
import {ExtraPortalModel} from '../../../models/extraPortal/ExtraPortalModel'
import {DefaultRightActionItems} from "../../generic/layouts/dashboard/Navbar/Navbar";
const extraPortalModel = new ExtraPortalModel();

@observer
class ExtraPortal extends React.Component<{}, {}>{

  public render() {
    const MainView = extraPortalModel.mainView;
    const navbarRightItems: React.ReactElement<any> = <DefaultRightActionItems/>
    return(
      <Dashboard navbarRightItems={navbarRightItems}>
        <h1>Welcome extra! </h1>
        <MainView />
      </Dashboard>
    )
  }
}

export default ExtraPortal
