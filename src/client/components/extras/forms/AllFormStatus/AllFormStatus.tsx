import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import {FormStatusIcon, IProps as IFormStatusProps} from '../../../generic/forms/FormStatusIcon/FormStatusIcon'
const EFSFormImg: string = require('../../../../assets/images/forms/EFS.jpg')
const PenceFormImg: string = require('../../../../assets/images/forms/Pence.jpg')
const EmergeFormImg: string = require('../../../../assets/images/forms/Emerge.jpg')


interface Props {
  model: any;
}

const EFSForm: IFormStatusProps = {formName: 'EFS', imgSrc: EFSFormImg}
const PenceForm: IFormStatusProps = {formName: 'Pence', imgSrc: PenceFormImg}
const EmergeForm: IFormStatusProps = {formName: 'Emergency Contact', imgSrc: EmergeFormImg}
const forms: Array<IFormStatusProps> = [EFSForm, PenceForm, EmergeForm]

const AllFormStatus = (props: any) => {
  return(
    <div className={s.container}>
      <span className={s.headerTitle}>Your completed forms</span>
      <div onClick={props.model.navDailyTasks} className={s.dailyTaskNav}>Go to daily tasks - </div>
      <div className={s.formIconList}>
        {forms.map((form, key) => {
          return(
            <div className={s.formIcon}>
              <FormStatusIcon key={key} formName={form.formName} imgSrc={form.imgSrc} />
            </div>
          )
        })}
      </div>
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
