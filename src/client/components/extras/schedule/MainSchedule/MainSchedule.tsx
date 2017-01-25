import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

const MainSchedule = () => {
  return(
    <div className={s.container}>
      <div className={s.headerInfo}>
        <span>Schedule</span>
        <span>Monday May 25, 2017</span>
      </div>
    </div>
  )
}

export default MainSchedule;
