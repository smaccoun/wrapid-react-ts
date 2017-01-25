import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import DefaultPanel from '../../dailyTasks/panels/DefaultPanel/DefaultPanel'


const MainSchedule = () => {
  return(
    <DefaultPanel headerItems={['Schedule', 'Monday']}>
      <div>Schedule Item!</div>
    </DefaultPanel>
  )
}

export default MainSchedule;
