import * as React from 'react';
import * as ReactDOM from 'react-dom';

const avatarImg: string = require('../../../../../assets/images/theraccounATgmailDOTcom.jpg')

const s = require('./style.css')

const AvatarNail = () => {
  console.log(avatarImg);
  return(
    <img src={`${avatarImg}`} className={s.container}/>
  )
}

export default AvatarNail
