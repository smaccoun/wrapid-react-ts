import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Navbar from '../Navbar/Navbar'
import MainPage from '../MainPage/MainPage'

class Dashboard extends React.Component<{}, {}>{

  public render(){
    return(
      <div>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}

export default Dashboard
