import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DefaultPanel from "../../../generic/panels/DefaultPanel/DefaultPanel";

const s = require('./style.css')

interface CrewInfoItem {
  role: string,
  name: string
}

interface Props {
  crewInfoItems: Array<CrewInfoItem>
}

const CrewInfoPanel = (props: Props) => {
  return(
    <DefaultPanel headerItems={['Contact Info']}>
      {props.crewInfoItems.map((ci, key) => {
        return(
          <div className={s.infoItems} key={key}>
            <span className={s.role}>{ci.role}</span>
            <span className={s.name}>{ci.name}</span>
          </div>
        )
      })}
    </DefaultPanel>
  )
}

export default CrewInfoPanel;
