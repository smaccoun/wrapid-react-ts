import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import {Navbar, DefaultRightActionItems} from '../Navbar/Navbar'

interface Props {
    navbarRightItems?: React.ReactElement<any>
}

class Dashboard extends React.Component<Props, {}>{

  public render(){
    return(
      <div className={s.container}>
        <div className={s.contentContainer}>
            <Navbar rightActionItems={this.props.navbarRightItems}/>
            <div className={s.mainPage}>
              {this.props.children}
            </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
