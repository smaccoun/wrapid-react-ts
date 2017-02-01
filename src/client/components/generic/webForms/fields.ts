export interface Field {
    label: string,
    value: string,
    related?: Array<string>,
    placeholder?: string,
    rules?: string,
    bindings?: string
}

export const userNameField: Field = {
    label: 'Username',
    value: 'SteveJobs',
    placeholder: 'Insert User Name',
    rules: 'required|string|between:5,15',
    bindings: 'MaterialTextField',
    // validate: [checkUser],
}

export const passwordField: Field = {
    label: 'Password',
    value: 'thinkdifferent',
    placeholder: 'Insert your Password',
    rules: 'required|string|between:5,15',
    bindings: 'MaterialTextField',
}

export const emailField: Field = {
    label: 'Email',
    value: 's.jobs@apple.com',
    related: ['emailConfirm'],
    placeholder: 'Insert your Email address',
    rules: 'required|email|string|between:5,20',
    bindings: 'MaterialTextField',
}

export const firstNameField: Field = {
    label: 'First Name',
    value: 'SteveJobs',
    placeholder: 'Insert First Name',
    rules: 'required|string|between:5,15',
    bindings: 'MaterialTextField',
    // validate: [checkUser],
}

export const lastNameField: Field = {
    label: 'Last Name',
    value: 'SteveJobs',
    placeholder: 'Insert Last Name',
    rules: 'required|string|between:5,15',
    bindings: 'MaterialTextField',
    // validate: [checkUser],
}

export const middleInitialField: Field = {
    label: 'Middle Initial',
    value: 'SteveJobs',
    placeholder: 'Insert Middle Initial',
    rules: 'checkUser|required|string|between:5,15',
    bindings: 'MaterialTextField',
    // validate: [checkUser],
}




export const emailConfirm: Field = {
    label: 'Confirm Email',
    value: 's.jobs@apple.com',
    placeholder: 'Confirm your Email address',
    // validate: [isEmail, shouldBeEqualTo('email')],
    rules: 'required|string|between:3,20',
    bindings: 'MaterialTextField',
}

export const signature: Field = {
    label: 'Signature',
    value: 's.jobs@apple.com',
    placeholder: 'Type Digital Signature',
    // validate: [isEmail, shouldBeEqualTo('email')],
    rules: 'required|string|between:5,20',
    bindings: 'MaterialTextField',
}



//DOCTOR

// const FormContent = (function(){
//
//     const FT = {
//         TEXTAREA : 'TEXTAREA',
//         CHECKBOX : 'CHECKBOX'
//     }
//
//     const forms =
//         {
//             PenceForm :
//                 {
//                     title : 'Pence Form Fillable',
//                     fields : {
//
//                         extra : [
//                             {
//                                 ref : 'Series',
//                                 label : 'Title of Series',
//                                 type : FT.TEXTAREA,
//                                 input : 'Queen of the South Season 1'
//                             },
//
//                             {
//                                 ref : 'FirstName',
//                                 label : 'First Name',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'LastName',
//                                 label : 'Last Name',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'LegalLabel',
//                                 label : 'Legal label',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Street',
//                                 label : 'Address (Street/Apt #)',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'City',
//                                 label : 'City',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'State',
//                                 label : 'State',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Country',
//                                 label : 'Country',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Zip',
//                                 label : 'ZIP Code',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'DOB',
//                                 label : 'Date of Birth',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//                         ]
//                     }
//                 },
//
//             EmergencyContact :
//                 {
//                     title : 'Emergency Contact and Confidentiality',
//                     fields : {
//
//                         extra : [
//                             {
//                                 ref : 'FirstName',
//                                 label : 'First Name',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'LastName',
//                                 label : 'Last Name',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Department',
//                                 label : 'Department',
//                                 type : FT.TEXTAREA,
//                                 input : 'Extras'
//                             },
//
//                             {
//                                 ref : 'Street',
//                                 label : 'Home Address',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'City',
//                                 label : 'City',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'State',
//                                 label : 'State',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Zip',
//                                 label : 'Zip',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Phone',
//                                 label : 'Phone',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'DOB',
//                                 label : 'DOB',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Email',
//                                 label : 'Email',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Doctor',
//                                 label : 'Doctor',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//                         ],
//
//                         employer : [
//                             {
//                                 ref : 'ProductionCompany',
//                                 label : 'ProductionCompany',
//                                 type : FT.TEXTAREA,
//                                 input : 'TVM Productions Inc'
//                             },
//                             {
//                                 ref : 'Name',
//                                 label : 'Name',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//                             {
//                                 ref : 'Signature',
//                                 label : 'Signature',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             }
//                         ]
//                     }
//                 },
//
//             EmergencyContact :
//                 {
//                     title : 'Emergency Contact and Confidentiality',
//                     fields : {
//
//                         extra : [
//                             {
//                                 ref : 'FirstName',
//                                 label : 'First Name',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'LastName',
//                                 label : 'Last Name',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Department',
//                                 label : 'Department',
//                                 type : FT.TEXTAREA,
//                                 input : 'Extras'
//                             },
//
//                             {
//                                 ref : 'Street',
//                                 label : 'Address',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'City',
//                                 label : 'City',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'State',
//                                 label : 'State',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Zip',
//                                 label : 'Zip',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Phone',
//                                 label : 'Phone',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'DOB',
//                                 label : 'DOB',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Email',
//                                 label : 'Email',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Doctor',
//                                 label : 'Doctor',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//                         ],
//
//                         employer : [
//                             {
//                                 ref : 'ProductionCompany',
//                                 label : 'ProductionCompany',
//                                 type : FT.TEXTAREA,
//                                 input : 'TVM Productions Inc'
//                             },
//                             {
//                                 ref : 'Name',
//                                 label : 'Name',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//                             {
//                                 ref : 'Signature',
//                                 label : 'Signature',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             }
//                         ]
//                     }
//
//                 },
//
//             DeclarationState :
//                 {
//                     title : 'Declaration of State Residency',
//                     fields : {
//
//                         extra : [
//                             {
//                                 ref : 'FirstName',
//                                 label : 'First Name',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'LastName',
//                                 label : 'Last Name',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Department',
//                                 label : 'Department',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Street',
//                                 label : 'Address',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'City',
//                                 label : 'City',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'State',
//                                 label : 'State',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Zip',
//                                 label : 'Zip',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Phone',
//                                 label : 'Phone',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'DOB',
//                                 label : 'DOB',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Email',
//                                 label : 'Email',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Doctor',
//                                 label : 'Doctor',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Signature',
//                                 label : 'Signature',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//
//                             {
//                                 ref : 'Date',
//                                 label : 'Date',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             }
//                         ],
//
//                         employer : [
//                             {
//                                 ref : 'ProductionCompany',
//                                 label : 'ProductionCompany',
//                                 type : FT.TEXTAREA,
//                                 input : 'TVM Productions Inc'
//                             },
//                             {
//                                 ref : 'Name',
//                                 label : 'Name',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             },
//                             {
//                                 ref : 'Signature',
//                                 label : 'Signature',
//                                 type : FT.TEXTAREA,
//                                 input : null
//                             }
//                         ]
//                     }
//                 }
//         }
//
// })()


