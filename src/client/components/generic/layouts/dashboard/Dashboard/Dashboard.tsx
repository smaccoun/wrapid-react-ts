import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import Navbar from '../Navbar/Navbar'
import MainPage from '../MainPage/MainPage'

class Dashboard extends React.Component<{}, {}>{

  public render(){
    return(
      <div className={s.container}>
        <Navbar />
        <div className={s.mainPage}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Dashboard
