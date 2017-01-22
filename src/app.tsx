const styles = require('./index.scss')
import * as React from 'react';

const injectTapEventPlugin = require('react-tap-event-plugin');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

import Login from './client/components/generic/login/Login'
import Dashboard from './client/components/generic/layouts/dashboard/Dashboard/Dashboard'
import ExtraPortal from './client/components/extras/portal/ExtraPortal'

export default class App extends React.Component<any, any> {
  render() {
    return (
      <div>
        <MuiThemeProvider>
        <ExtraPortal />
        </MuiThemeProvider>
      </div>
    )
  }
}
