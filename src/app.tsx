import {observer} from "mobx-react";
const styles = require('./index.scss')
import * as React from 'react';

const injectTapEventPlugin = require('react-tap-event-plugin');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
injectTapEventPlugin();

import Login from './client/components/generic/login/Login'
import Dashboard from './client/components/generic/layouts/dashboard/Dashboard/Dashboard'
import ExtraPortal from './client/components/extras/portal/ExtraPortal'

import {AppModel, VIEW_NAMES} from './client/models/AppModel'
import {LoginModel} from "./client/models/login/LoginModel";

const appModel = new AppModel();

@observer
class App extends React.Component<any, any> {

    renderMainView = (): React.ReactElement<any> => {
        const LoginView = <Login loginModel={new LoginModel(appModel.submitLogin)} />
        switch(appModel.viewName){
            case VIEW_NAMES.LOGIN:
                return LoginView
            case VIEW_NAMES.EXTRA_PORTAL:
                return <ExtraPortal/>
            default:
                return LoginView

        }
    }

  render() {
    return (
      <div>
        <MuiThemeProvider>
            {this.renderMainView()}
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App;
