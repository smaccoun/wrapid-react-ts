"use strict";
const routes = [
    { name: 'Login', path: '/Login' },
    { name: 'ExtraPortal', path: '/ExtraPortal', children: [
            { name: 'DailyTasks', path: '/DailyTasks' },
            { name: 'ProfileWizard', path: '/ProfileWizard' },
            { name: 'AllFormStatus', path: '/AllFormStatus' }
        ] }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routes;
//# sourceMappingURL=routes.js.map