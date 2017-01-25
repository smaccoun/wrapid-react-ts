import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import DefaultPanel from '../../dailyTasks/panels/DefaultPanel/DefaultPanel'

const MainSchedule = () => {
  return(
    <div className={s.container}>
      <DefaultPanel headerItems={['Schedule', 'Monday']}>
        <div>Main content!</div>
      </DefaultPanel>
    </div>
  )
}

export default MainSchedule;
