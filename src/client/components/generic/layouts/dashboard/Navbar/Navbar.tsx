import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import AvatarNail from '../../../images/photoNails/AvatarNail/AvatarNail'
import ActivityBell from './ActivityBell/ActivityBell'
import WrapidLogo from '../../../brand/wrapidLogo/WrapidLogo'

interface Props {
    rightActionItems?: React.ReactElement<any>
}

export class Navbar extends React.Component<Props, {}>{

  public render() {
    return(
      <div className={s.container}>
        <div className={s.brandLabel}>
          <WrapidLogo />
        </div>
        <div className={s.rightActionItemContainer}>
            {this.props.rightActionItems}
        </div>
      </div>
    )
  }
}

export const DefaultRightActionItems: React.StatelessComponent<{}> = () => {
    return(
        <div className={s.rightActionItemContainer}>
            <ActivityBell />
            <AvatarNail />
            <HamburgerMenu />
        </div>
    )
}

export const HamburgerMenu = () => {
  return(
    <div className={s.hamburgerMenu}>
      <span className={s.iconBar}></span>
      <span className={s.iconBar}></span>
      <span className={s.iconBar}></span>
    </div>
  )
}
