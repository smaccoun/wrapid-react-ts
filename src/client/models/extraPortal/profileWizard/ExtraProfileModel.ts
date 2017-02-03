import {emailField, Field, firstNameField, lastNameField, signature} from "../../../components/generic/webForms/fields";
import {ProfileModel, ProfileSectionModel} from "../../profiles/ProfileModel";


const nameFields = [firstNameField, lastNameField, emailField]
const signatureField = [signature]

const defaultSections = [
  new ProfileSectionModel('User Info', nameFields),
  new ProfileSectionModel('Signature', signatureField)
]

export class ExtraProfileModel extends ProfileModel {

  extraName: string;

  constructor(){
    super(defaultSections)
  }
}