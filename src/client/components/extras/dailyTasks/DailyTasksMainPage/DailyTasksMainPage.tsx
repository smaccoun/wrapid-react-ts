import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

interface Props {
  model: any;
}

const DailyTasksMainPage = (props: Props) => {
  return(
    <div>Daily tasks!</div>
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
