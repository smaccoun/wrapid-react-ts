import * as React from 'react';

const avatarImg: string = require('../../../../../assets/images/theraccounATgmailDOTcom.jpg')

const s = require('./style.css')

const AvatarNail = () => {
  return(
    <img src={`${avatarImg}`} className={s.container}/>
  )
}

export default AvatarNail
