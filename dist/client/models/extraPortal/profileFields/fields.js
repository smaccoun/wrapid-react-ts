"use strict";
const validatorjs = require('validatorjs');
exports.plugins = { dvr: validatorjs };
const userNameField = {
    label: 'Username',
    value: 'SteveJobs',
    placeholder: 'Insert User Name',
    rules: 'checkUser|required|string|between:5,15',
    bindings: 'MaterialTextField',
};
const emailField = {
    label: 'Email',
    value: 's.jobs@apple.com',
    related: ['emailConfirm'],
    placeholder: 'Insert your Email address',
    rules: 'required|email|string|between:5,20',
    bindings: 'MaterialTextField',
};
const firstNameField = {
    label: 'First Name',
    value: 'SteveJobs',
    placeholder: 'Insert First Name',
    rules: 'checkUser|required|string|between:5,15',
    bindings: 'MaterialTextField',
};
const lastNameField = {
    label: 'Last Name',
    value: 'SteveJobs',
    placeholder: 'Insert Last Name',
    rules: 'checkUser|required|string|between:5,15',
    bindings: 'MaterialTextField',
};
const middleInitialField = {
    label: 'Middle Initial',
    value: 'SteveJobs',
    placeholder: 'Insert Middle Initial',
    rules: 'checkUser|required|string|between:5,15',
    bindings: 'MaterialTextField',
};
const passwordField = {
    label: 'Password',
    value: 'thinkdifferent',
    placeholder: 'Insert your Password',
    rules: 'required|string|between:5,20',
    bindings: 'MaterialTextField',
};
const emailConfirm = {
    label: 'Confirm Email',
    value: 's.jobs@apple.com',
    placeholder: 'Confirm your Email address',
    rules: 'required|string|between:5,20',
    bindings: 'MaterialTextField',
};
const signature = {
    label: 'Signature',
    value: 's.jobs@apple.com',
    placeholder: 'Type Digital Signature',
    rules: 'required|string|between:5,20',
    bindings: 'MaterialTextField',
};
exports.fields = {
    userNameField,
    emailField,
    passwordField,
    firstNameField,
    lastNameField,
    middleInitialField,
    emailConfirm,
    signature
};
//# sourceMappingURL=fields.js.map