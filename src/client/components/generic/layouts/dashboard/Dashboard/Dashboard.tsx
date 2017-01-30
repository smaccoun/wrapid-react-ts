import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import {Navbar, DefaultRightActionItems} from '../Navbar/Navbar'

interface Props {
    navbarRightItems?: React.StatelessComponent<any>
}

class Dashboard extends React.Component<Props, {}>{

  public render(){
    return(
      <div className={s.container}>
        <Navbar rightActionItems={this.props.navbarRightItems}/>
        <div className={s.mainPage}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Dashboard
