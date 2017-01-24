import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';
import gqlSDK from './server/connect/graphcoolConnect'

import Router from './router/router'

Router.start('/Login');
Router.navigate('Login');
console.log(Router);

console.log(Router);

render(
    <AppContainer>
      <App />
    </AppContainer>,
document.querySelector("#app"));

var module: any = module

if (module && module['hot']) {
    module.hot.accept('./app', () => {
        const App = require('./app').default;
        render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.querySelector("#app")
        );
    });
}
