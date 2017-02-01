
import {ValidMaterialForm} from "../../components/generic/webForms/ValidMaterialForm";
import {emailField, Field, firstNameField, lastNameField, signature} from "../../components/generic/webForms/fields";
import {ValidFormModel} from "../webForm/ValidFormModel";

import {all} from 'ramda'


export class ProfileSectionModel {
  title: string
  isComplete = () => false;
  validForm: ValidFormModel


  constructor(title: string, fields: Array<Field>){
    this.title = title;
    this.validForm = new ValidFormModel(fields)
    this.isComplete = this.validForm.areAllInputsValid
  }
}

export class ProfileModel {

  sections: Array<ProfileSectionModel>
  isComplete = () => {
    return all((s: ProfileSectionModel) => s.isComplete())(this.sections)
  }



  constructor(sections: Array<ProfileSectionModel>){
    this.sections = sections;
  }
}