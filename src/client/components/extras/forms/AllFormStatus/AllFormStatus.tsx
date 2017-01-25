import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import {FormStatusIcon, IProps as IFormStatusProps} from '../../../generic/forms/FormStatusIcon/FormStatusIcon'
const EFSFormImg: string = require('../../../../assets/images/forms/EFS.jpg')
const PenceFormImg: string = require('../../../../assets/images/forms/Pence.jpg')


interface Props {
  model: any;
}

const EFSForm: IFormStatusProps = {formName: 'EFS', imgSrc: EFSFormImg}
const PenceForm: IFormStatusProps = {formName: 'Pence', imgSrc: PenceFormImg}
const forms: Array<IFormStatusProps> = [EFSForm, PenceForm]

const AllFormStatus = (props: any) => {
  return(
    <div className={s.container}>
      <h1>Your completed forms</h1>
      <div>Go to daily tasks - </div>
      {forms.map((form, key) => {
        return(
          <FormStatusIcon key={key} formName={form.formName} imgSrc={form.imgSrc} />
        )
      })}
    </div>
  )
}

const viewAllFormStatus = (model : any) => {
  return class PP extends React.Component<{}, {}> {
    render(){
      return(
        <AllFormStatus model={model} />
      )
    }
  }
}

export default viewAllFormStatus;
