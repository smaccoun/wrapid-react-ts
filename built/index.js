"use strict";
const React = require("react");
const react_dom_1 = require("react-dom");
const react_hot_loader_1 = require("react-hot-loader");
const app_1 = require("./app");
react_dom_1.render(React.createElement(react_hot_loader_1.AppContainer, null,
    React.createElement(app_1.default, null)), document.querySelector("#app"));
var module = module;
if (module && module['hot']) {
    module.hot.accept('./app', () => {
        const App = require('./app').default;
        react_dom_1.render(React.createElement(react_hot_loader_1.AppContainer, null,
            React.createElement(App, null)), document.querySelector("#app"));
    });
}
//# sourceMappingURL=index.js.map