"use strict";
const apollo_client_1 = require("apollo-client");
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
const gqlSDK = new apollo_client_1.default({ networkInterface });
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = gqlSDK;
//# sourceMappingURL=graphcoolConnect.js.map