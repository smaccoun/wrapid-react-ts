import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

class ActivityBell extends React.Component<{}, {}>{

  public render() {
    return(
      <div className={s.container}>
        <div className={s.bellQtContainer}>
          <div className={s.activeQt}>3</div>
          <i className="fa fa-bell" />
        </div>
      </div>
    )
  }
}

export default ActivityBell
