import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import MainSchedule from '../../schedule/MainSchedule/MainSchedule'
import CrewInfoPanel from '../../dailyTasks/CrewInfoPanel/CrewInfoPanel'

const sampleCrewInfoItems = [
  {role: 'Lead PA', name: 'Josh Weinberg'},
  {role: 'Extra PA', name: 'Rany Lahey'},
  {role: 'Wardrobe Manager', name: 'Pam Poovey'}
]


interface Props {
  model: any;
}

const DailyTasksMainPage = (props: Props) => {
  return(
    <div className={s.container}>
      <div className={s.headerInfo}>
        <span className={s.date}>Monday May 25, 2016</span>
        <span className={s.title}>Welcome, Steve</span>
        <span className={s.production}>AMC's The Walking Dead</span>
      </div>
      <MainSchedule />
      <CrewInfoPanel crewInfoItems={sampleCrewInfoItems}/>
    </div>
  )
}

const viewDailyTasks = (model : any) => {
  return class PP extends React.Component<{}, {}> {
    render(){
      return(
        <DailyTasksMainPage model={model} />
      )
    }
  }
}

export default viewDailyTasks;
