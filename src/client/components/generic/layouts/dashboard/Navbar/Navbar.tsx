import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import AvatarNail from '../../../images/photoNails/AvatarNail/AvatarNail'
import ActivityBell from './ActivityBell/ActivityBell'
import WrapidLogo from '../../../brand/wrapidLogo/WrapidLogo'

class Navbar extends React.Component<{}, {}>{

  public render() {
    return(
      <div className={s.container}>
        <div className={s.brandLabel}>
          <WrapidLogo />
        </div>
        <div className={s.rightActionItems}>
          <ActivityBell />
          <AvatarNail />
          <HamburgerMenu />
        </div>
      </div>
    )
  }
}

const HamburgerMenu = () => {
  return(
    <div className={s.HamburgerMenu}>
      --
    </div>
  )
}

export default Navbar
