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


@observer
class ValidMaterialForm extends React.Component<{fields: Array<Field>, advanceSection?: AdvanceSection}, any> {

    allInputs = [];

    render(){
        const {fields} = this.props;
        let validFields = [];
        fields.forEach(field => {
            const inputHandler = new InputHandler(field);
            this.allInputs.push(inputHandler);
            const validField = <ValidField key={field.label} inputHandler={inputHandler} fieldLabel={field.label}/>;
            validFields.push(validField)
        })

        const {SubmitComponent, onAdvance} = this.props.advanceSection

        return(
            <div>
                {validFields.map(vf => {
                    return(
                        <div>{vf}</div>
                    )
                })}
                <SubmitComponent onClick={() => onAdvance(this.allInputs)}/>
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
        console.log(field);
        console.log(curInput)
        const data = {[field.label]: curInput};
        const rules = {[field.label]: field.rules};
        console.log(rules);
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


