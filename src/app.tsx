const styles = require('./index.scss')
import * as React from 'react';

import Login from './client/components/generic/login/Login'
import Dashboard from './client/components/generic/layouts/dashboard/Dashboard/Dashboard'
import ExtraPortal from './client/components/extras/portal/ExtraPortal'

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <ExtraPortal />
      </div>
    )
  }
}
