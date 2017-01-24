import * as React from 'react';
import * as ReactDOM from 'react-dom';
import gql from 'graphql-tag'
import {observer} from 'mobx-react'

import Dashboard from '../../generic/layouts/dashboard/Dashboard/Dashboard'
import {ExtraPortalModel} from '../../../models/extraPortal/ExtraPortalModel'
const extraPortalModel = new ExtraPortalModel();

@observer
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
