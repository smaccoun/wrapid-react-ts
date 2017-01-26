import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

const MainSchedule = () => {
  return(
    <DefaultPanel headerItems={['Schedule', 'Monday']}>
      <div>Schedule Item!</div>
    </DefaultPanel>
  )
}

export default MainSchedule;
