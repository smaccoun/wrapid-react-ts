import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CheckIcon from "../../icons/CheckIcon";

const s = require('./style.css')


interface IProps {
  formName: string,
  imgSrc: string
}

const FormStatusIcon = (props: IProps) => {
  return(

    <div className={s.container}>
      <img src={`${props.imgSrc}`} className={s.iconImg}/>
      <div className={s.infoContainer}>
        <span className={s.formName}>{props.formName}</span>
        <span className={s.completedTime}>
            <CheckIcon width="12px" height="12px"/><span>Completed: 01/28/17</span>
        </span>
        <span className={s.completedTime}>8:05am</span>
      </div>
    </div>
  )
}

export {FormStatusIcon, IProps};
