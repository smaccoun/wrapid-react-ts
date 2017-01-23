// import FieldValidate from './extensionVJF';
const validatorjs: any = require('validatorjs');

export const plugins = { dvr: validatorjs };

export interface Field {
  label: string,
  value: string,
  related?: Array<string>,
  placeholder?: string,
  rules?: string,
  bindings?: string
}

const userNameField: Field = {
  label: 'Username',
  value: 'SteveJobs',
  placeholder: 'Insert User Name',
  rules: 'checkUser|required|string|between:5,15',
  bindings: 'MaterialTextField',
  // validate: [checkUser],
}

const emailField: Field = {
  label: 'Email',
  value: 's.jobs@apple.com',
  related: ['emailConfirm'],
  placeholder: 'Insert your Email address',
  rules: 'required|email|string|between:5,20',
  bindings: 'MaterialTextField',
}
const passwordField: Field = {
  label: 'Password',
  value: 'thinkdifferent',
  placeholder: 'Insert your Password',
  rules: 'required|string|between:5,20',
  bindings: 'MaterialTextField',
}

const emailConfirm: Field = {
  label: 'Confirm Email',
  value: 's.jobs@apple.com',
  placeholder: 'Confirm your Email address',
  // validate: [isEmail, shouldBeEqualTo('email')],
  rules: 'required|string|between:5,20',
  bindings: 'MaterialTextField',
}

const signature: Field = {
  label: 'Signature',
  value: 's.jobs@apple.com',
  placeholder: 'Type Digital Signature',
  // validate: [isEmail, shouldBeEqualTo('email')],
  rules: 'required|string|between:5,20',
  bindings: 'MaterialTextField',
}

export const fields = {
  userNameField,
  emailField,
  passwordField,
  emailConfirm,
  signature
}
