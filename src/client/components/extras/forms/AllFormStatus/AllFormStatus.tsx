import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import {FormStatusIcon, IProps as IFormStatusProps} from '../../../generic/forms/FormStatusIcon/FormStatusIcon'
import fadesUp from '../../../generic/animations/fade/fadeInUp'
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


class AllFormStatus extends React.Component<any, any> {
    render(){
        return(
            <div className={s.container}>
                <span className={s.headerTitle}>Your completed forms</span>
                <div onClick={this.props.model.navDailyTasks} className={s.dailyTaskNav}>Go to daily tasks - </div>
                <div className={s.formIconList}>
                    {forms.map((form, key) => {
                        return(
                           <FadeUpFormStatusListItem formName={form.formName} imgSrc={form.imgSrc} key={key}/>
                        )
                    })}
                </div>
            </div>
        )
    }

}

@fadesUp
class FadeUpFormStatusListItem extends React.Component<{formName: string, imgSrc: string, key: number}, any> {
    render(){
        const {formName, imgSrc, key} = this.props;
        return(
            <div key={key} className={s.formIcon}>
                <FormStatusIcon formName={formName} imgSrc={imgSrc} />
            </div>
        )
    }
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
