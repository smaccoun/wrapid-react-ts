import * as React from 'react';

const s = require('./style.css')

interface SIProps {
  title: string,
  startTm: string
}

const ScheduleItem = (props: SIProps) => {
  return(
    <div className={s.itemContainer}>
      <span className={s.title}>{props.title}</span>
      <span className={s.startTm}>{props.startTm}</span>
    </div>
  )
}

export default ScheduleItem;
