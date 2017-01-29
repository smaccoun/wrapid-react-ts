import * as React from 'react'
import {Field} from "./fields";
import {observer} from 'mobx-react'
import {observable, action, computed} from 'mobx'
const Validator = require('validatorjs')

import TextField from 'material-ui/TextField';

class ValidMaterialForm extends React.Component<{fields: Array<Field>}, any> {

    constructor(props) {
        super(props);

    }


    render(){
        const {fields} = this.props;
        return(
            <div>
                {fields.map(field => {
                    return(
                        <ValidField field={field}/>
                    )
                })}
            </div>
        )
    }
}

@observer
class ValidField extends React.Component<{field: Field}, any>{
    @observable curInput = '';

    @computed get errorMessage(): string {
        if(!this.curInput){
            return '';
        }
        const field = this.props.field;
        const curInput = this.curInput;
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

    @action onFieldInput = (e: any, field: Field) => {
        this.curInput = e.target.value;
        console.log(e.target.value);

    }

    render(){
        const {field} = this.props;
        return(
            <TextField
                key={field.label}
                id={field.label}
                floatingLabelText={field.label}
                onChange={e => this.onFieldInput(e, field)}
                errorText={this.errorMessage}
            />
        )
    }
}

export default ValidMaterialForm;


