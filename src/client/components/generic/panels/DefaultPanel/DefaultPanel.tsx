import * as React from 'react';

const s = require('./style.css')

import PanelHeader from '../PanelHeader/PanelHeader'

interface Props {
  headerItems: Array<String>,
    children?: React.ReactChildren,
    footer?: React.ReactElement<any>
}

const DefaultPanel = (props: Props) => {
  return(
    <div className={s.container}>
      <PanelHeader headerItems={props.headerItems} />
      <div className={s.contentContainer}>
        {props.children}
      </div>
        {props.footer &&
            <div className={s.footer}>
                {props.footer}
            </div>
        }
    </div>
  )
}

export default DefaultPanel;
