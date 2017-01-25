import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

import PanelHeader from '../PanelHeader/PanelHeader'

interface Props extends React.Props<any> {
  headerItems: Array<String>
}

const DefaultPanel = (props: Props) => {
  return(
    <div className={s.container}>
      <PanelHeader headerItems={props.headerItems} />
      <div className={s.contentContainer}>
        {props.children}
      </div>
    </div>
  )
}

export default DefaultPanel;
