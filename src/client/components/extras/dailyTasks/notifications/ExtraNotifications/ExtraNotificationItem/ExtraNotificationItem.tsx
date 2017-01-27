import * as React from 'react'
import ReactElement = React.ReactElement;

const s = require('./style.css')

interface Props {
    icon?: ReactElement<any>,
    title: string,
    timeSpan: {startTm: string, endTm: string}
}

const ExtraNotificationItem = (props: Props) => {
    return(
        <div className={s.container}>
            <div className={s.iconContainer}>{props.icon}</div>
            <div className={s.infoContainer}>
                <span className={s.title}>{props.title}</span>
                <span className={s.timeSpan}>{props.timeSpan.startTm} - {props.timeSpan.endTm}</span>
            </div>
        </div>
    )
}

export {ExtraNotificationItem, Props}