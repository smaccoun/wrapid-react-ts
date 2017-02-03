import {Field} from "../../components/generic/webForms/fields";
import {action, computed, observable} from "mobx";
const Validator = require('validatorjs')

export interface AllInputs {
    [fieldId: string]: ValidFieldModel
}

export class ValidFormModel {

    constructor(fields: Array<Field>) {
        console.log(fields);
        this.setAllInputs(fields);

    }

    @action setAllInputs = (fields: Array<Field>) => {
        fields.forEach(field => {
            this.allInputs[field.label] = new ValidFieldModel(field);
        })
    }

    allInputs: AllInputs = {}

    @computed get allInputsEntered(): boolean {
        if(!this.allInputs){
            return false;
        }

        const allInputs = this.allInputs
        const allInputFields = Object.keys(allInputs);
        console.log(allInputFields)
        for(let i in allInputFields){
            const fieldId = allInputFields[i]
            const input = allInputs[fieldId]
            console.log(input)

            if(!input.curInput){
                return false;
            }
        }

        return true;
    }

    @computed get areAllInputsValid(): boolean {
        if(!this.allInputs){
            return false;
        }

        const allInputs = this.allInputs
        const allInputFields = Object.keys(allInputs);
        console.log(allInputFields)
        for(let i in allInputFields){
            const fieldId = allInputFields[i]
            const input = allInputs[fieldId]
            console.log(input)

            if(input.errorMessage.length > 0){
                return false;
            }
        }

        return true;
    }
}

export class ValidFieldModel {
    constructor(field: Field) {
        this.field = field;
    }

    field: Field;
    @observable curInput: '';

    @computed get errorMessage(): string {
        if(!this.curInput){
            return '';
        }

        const curInput = this.curInput;
        const field = this.field;
        const data = {[field.label]: curInput};
        const rules = {[field.label]: field.rules};
        const valid = new Validator(data, rules);

        if(valid.fails()){
            return valid.errors.get(field.label)
        }

        return ''
    }

    @action setInput = (e: any) => {
        this.curInput = e.target.value;
    }
}