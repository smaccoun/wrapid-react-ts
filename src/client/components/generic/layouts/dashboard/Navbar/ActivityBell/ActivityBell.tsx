import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

class ActivityBell extends React.Component<{}, {}>{

  public render() {
    return(
      <div className={s.container}>
        3
      </div>
    )
  }
}

export default ActivityBell
