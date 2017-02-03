
import {ValidMaterialForm} from "../../components/generic/webForms/ValidMaterialForm";
import {emailField, Field, firstNameField, lastNameField, signature} from "../../components/generic/webForms/fields";
import {ValidFormModel} from "../webForm/ValidFormModel";

import {all} from 'ramda'
import {autorun, computed, observable} from "mobx";


export class ProfileSectionModel {
  title: string
  validForm: ValidFormModel

  @computed get isComplete(): boolean {
    const allInputsEntered = this.validForm.allInputsEntered;
    console.error('ALL INPUTS ENTERED?', allInputsEntered)
    if(!allInputsEntered){
      return false;
    }

    const allValid = this.validForm.areAllInputsValid
    console.error('ALL VALID?!', allValid)
    return allValid;
  }


  constructor(title: string, fields: Array<Field>){
    this.title = title;
    this.validForm = new ValidFormModel(fields)
  }
}

export class ProfileModel {

  @observable sections: Array<ProfileSectionModel>

  @computed get isComplete(): boolean {
    console.log(this.sections)
    return false;
    // if(!this.sections){
    //   return false;
    // }
    //   for(let i in this.sections){
    //     const section = this.sections[i]
    //     console.log(section)
    //     if(!section.isComplete){
    //       return false;
    //     }
    //   }
    //
    //   return true;
  }



  constructor(sections: Array<ProfileSectionModel>){
    this.sections = sections;
  }
}