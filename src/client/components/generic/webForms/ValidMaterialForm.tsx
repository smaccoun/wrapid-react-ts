import * as React from 'react'
import {Field} from "./fields";
import {observer} from 'mobx-react'
import {observable, action, computed, IObservableObject, IActionFactory} from 'mobx'
const Validator = require('validatorjs')

import TextField from 'material-ui/TextField';

interface AdvanceSection {
    SubmitComponent: React.ComponentClass<any> | React.StatelessComponent<any>,
    onAdvance: (allInputs: Array<any>) => void
}

interface AllInputs {
    [fieldId: string]: InputHandler
}

export class ValidFormStateHandler {

    constructor(fields: Array<Field>) {
        console.log(fields);
        fields.forEach(field => {
            this.allInputs[field.label] = new InputHandler(field);
        })

        console.log(this.allInputs)
    }

    allInputs: AllInputs = {}

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
            if('errorMessage' in input){
                return false;
            }
        }

        return true;
    }
}

const viewValidMaterialForm = (fields: Array<Field>) => {
    const model = new ValidFormStateHandler(fields);
    const view = <ValidMaterialForm allInputs={model.allInputs}/>
    return {model, view}
}

@observer
class ValidMaterialForm extends React.Component<{allInputs: AllInputs}, any> {

    render(){
        const {allInputs} = this.props;

        return(
            <div>
                {Object.keys(allInputs).map(fieldId => {
                    const inputHandler = allInputs[fieldId]
                    return(
                        <ValidField fieldLabel={fieldId} inputHandler={inputHandler}/>
                    )
                })}
            </div>
        )
    }
}


@observer
class ValidField extends React.Component<{fieldLabel: string, inputHandler: InputHandler}, any> {
    render(){
        const {fieldLabel, inputHandler} = this.props;
        return(
            <TextField
                id={fieldLabel}
                floatingLabelText={fieldLabel}
                onChange={inputHandler.setInput}
                errorText={inputHandler.errorMessage}
            />
        )
    }
}


class InputHandler {
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
        console.log(curInput)
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



export {ValidMaterialForm, ValidField};


