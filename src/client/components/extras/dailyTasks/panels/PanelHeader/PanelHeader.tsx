import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

interface Props {
  headerItems: Array<String>
}

const PanelHeader = (props: Props) => {
  return(
    <div className={s.container}>
      {props.headerItems.map((hi, key) => {
        return(
          <span key={key} className={s.headerItem}>{hi}</span>
        )
      })}
    </div>
  )
}

export default PanelHeader;
