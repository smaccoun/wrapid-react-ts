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

const firstNameField: Field = {
  label: 'First Name',
  value: 'SteveJobs',
  placeholder: 'Insert First Name',
  rules: 'required|string|between:5,15',
  bindings: 'MaterialTextField',
  // validate: [checkUser],
}

const lastNameField: Field = {
  label: 'Last Name',
  value: 'SteveJobs',
  placeholder: 'Insert Last Name',
  rules: 'required|string|between:5,15',
  bindings: 'MaterialTextField',
  // validate: [checkUser],
}

const middleInitialField: Field = {
  label: 'Middle Initial',
  value: 'SteveJobs',
  placeholder: 'Insert Middle Initial',
  rules: 'checkUser|required|string|between:5,15',
  bindings: 'MaterialTextField',
  // validate: [checkUser],
}


const passwordField: Field = {
  label: 'Password',
  value: 'thinkdifferent',
  placeholder: 'Insert your Password',
  rules: 'required',
  bindings: 'MaterialTextField',
}

const emailConfirm: Field = {
  label: 'Confirm Email',
  value: 's.jobs@apple.com',
  placeholder: 'Confirm your Email address',
  // validate: [isEmail, shouldBeEqualTo('email')],
  rules: 'required|string|between:3,20',
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

