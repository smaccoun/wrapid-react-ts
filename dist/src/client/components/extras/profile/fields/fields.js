"use strict";
const validatorjs = require('validatorjs');
const plugins = { dvr: validatorjs };
const fields = {
    username: {
        label: 'Username',
        value: 'SteveJobs',
        placeholder: 'Insert User Name',
        rules: 'checkUser|required|string|between:5,15',
        bindings: 'MaterialTextField',
    },
    email: {
        label: 'Email',
        value: 's.jobs@apple.com',
        related: ['emailConfirm'],
        placeholder: 'Insert your Email address',
        rules: 'required|email|string|between:5,20',
        bindings: 'MaterialTextField',
    },
    password: {
        label: 'Password',
        value: 'thinkdifferent',
        placeholder: 'Insert your Password',
        rules: 'required|string|between:5,20',
        bindings: 'MaterialTextField',
    },
    devSkills: {
        label: 'Dev Skills (5-10)',
        value: 5,
        default: 5,
        rules: 'required|integer|between:5,10',
        bindings: 'MaterialTextField',
    },
    terms: {
        label: 'Accept Terms',
        value: true,
        rules: 'boolean|accepted',
    },
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    plugins,
    fields
};
//# sourceMappingURL=fields.js.map