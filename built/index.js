"use strict";
const React = require("react");
const react_dom_1 = require("react-dom");
const react_hot_loader_1 = require("react-hot-loader");
const app_1 = require("./app");
const apollo_client_1 = require("apollo-client");
const react_apollo_1 = require("react-apollo");
const networkInterface = apollo_client_1.createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciy518rhw048c0179d5o7tkmd' });
networkInterface.use([{
        applyMiddleware(req, next) {
            if (!req.options.headers) {
                req.options.headers = {};
            }
            req.options.headers['x-graphcool-source'] = 'example:react-apollo-instagram';
            next();
        },
    }]);
const client = new apollo_client_1.default({ networkInterface });
console.log(client);
react_dom_1.render(React.createElement(react_apollo_1.ApolloProvider, { client: client },
    React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(app_1.default, null))), document.querySelector("#app"));
var module = module;
if (module && module['hot']) {
    module.hot.accept('./app', () => {
        const App = require('./app').default;
        react_dom_1.render(React.createElement(react_hot_loader_1.AppContainer, null,
            React.createElement(App, null)), document.querySelector("#app"));
    });
}
//# sourceMappingURL=index.js.map