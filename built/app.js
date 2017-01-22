"use strict";
const styles = require('./index.scss');
const React = require("react");
const injectTapEventPlugin = require('react-tap-event-plugin');
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
injectTapEventPlugin();
const ExtraPortal_1 = require("./client/components/extras/portal/ExtraPortal");
class App extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(MuiThemeProvider_1.default, null,
                React.createElement(ExtraPortal_1.default, null))));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//# sourceMappingURL=app.js.map