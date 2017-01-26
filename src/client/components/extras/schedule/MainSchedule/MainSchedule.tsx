import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import DefaultPanel from '../../dailyTasks/panels/DefaultPanel/DefaultPanel'
import PanelFooter from '../../dailyTasks/panels/PanelFooter/PanelFooter'


const MainSchedule = () => {
  return(
    <DefaultPanel headerItems={['Schedule', 'Monday May 25, 2017']}>
      <ScheduleItem title={'Start Time'} startTm={'8:00 am'} />
      <ScheduleItem title={'Lunch Break'} startTm={'11:30 am'} />
      <ScheduleItem title={'Action Shot'} startTm={'1:30 pm'} />
      <ScheduleItem title={'Estimated Wrap Time'} startTm={'3:00 pm'} />
      <PanelFooter>
        <div className={s.footer}>
          <button className={s.checkinButton}>
            <span>CHECK IN</span>
          </button>
        </div>
      </PanelFooter>
    </DefaultPanel>
  )
}

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

export default MainSchedule;
