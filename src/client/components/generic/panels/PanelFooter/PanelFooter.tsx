import * as React from 'react';
import * as ReactDOM from 'react-dom';

const s = require('./style.css')

interface Props extends React.Props<any> {

}

const PanelFooter = (props: Props) => {
  return(
    <div className={s.container}>
      {props.children}
    </div>
  )
}

export default PanelFooter;
