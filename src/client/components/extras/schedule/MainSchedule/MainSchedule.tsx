import * as React from 'react';
import DefaultPanel from "../../../generic/panels/DefaultPanel/DefaultPanel";
import PanelFooter from "../../../generic/panels/PanelFooter/PanelFooter";
import ScheduleItem from "./ScheduleItem/ScheduleItem";

const s = require('./style.css')


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


export default MainSchedule;
