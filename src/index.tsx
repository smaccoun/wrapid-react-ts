import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app';
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciy518rhw048c0179d5o7tkmd' })

// The x-graphcool-source header is to let the server know that the example app has started.
// (Not necessary for normal projects)
networkInterface.use([{
  applyMiddleware (req: any, next: any) {
    if (!req.options.headers) {
      // Create the header object if needed.
      req.options.headers = {}
    }
    req.options.headers['x-graphcool-source'] = 'example:react-apollo-instagram'
    next()
  },
}])


const client = new ApolloClient({ networkInterface })
console.log(client)

render(
  <ApolloProvider client={client}>
    <AppContainer>
      <App />
    </AppContainer>
  </ApolloProvider>,
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
