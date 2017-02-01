import * as React from 'react'
import {Field} from "./fields";
import {observer} from 'mobx-react'
import {observable, action, computed, isObservable, IActionFactory, extendObservable} from 'mobx'

import TextField from 'material-ui/TextField';
import {AllInputs, ValidFieldModel} from "../../../models/webForm/ValidFormModel";



class ValidMaterialForm extends React.Component<{allInputs: AllInputs}, any> {

    render(){
        const {allInputs} = this.props;

        return(
            <div>
                {Object.keys(allInputs).map(fieldId => {
                    const inputHandler = allInputs[fieldId]
                    return(
                        <ValidField key={fieldId} fieldLabel={fieldId} inputHandler={inputHandler}/>
                    )
                })}
            </div>
        )
    }
}


@observer
class ValidField extends React.Component<{fieldLabel: string, inputHandler: ValidFieldModel}, any> {
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






export {ValidMaterialForm, ValidField};


