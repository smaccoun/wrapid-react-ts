import * as React from 'react';
import DefaultPanel from "../../../dailyTasks/panels/DefaultPanel/DefaultPanel";

const s = require('./style.css')

const MainSchedule = () => {
  return(
    <DefaultPanel headerItems={['Schedule', 'Monday']}>
      <div>Schedule Item!</div>
    </DefaultPanel>
  )
}

export default MainSchedule;
