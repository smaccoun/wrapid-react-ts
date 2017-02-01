"use strict";
const router5_1 = require("router5");
const routes_1 = require("./routes");
const listeners_1 = require("router5/plugins/listeners");
const browser_1 = require("router5/plugins/browser");
console.log(listeners_1.default);
console.log(listeners_1.default());
const options = { defaultRoute: 'ExtraPortal' };
const Router = router5_1.default(routes_1.default, options)
    .usePlugin(listeners_1.default())
    .usePlugin(browser_1.default({ useHash: true }));
console.log(Router);
Router.start();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Router;
//# sourceMappingURL=router.js.map