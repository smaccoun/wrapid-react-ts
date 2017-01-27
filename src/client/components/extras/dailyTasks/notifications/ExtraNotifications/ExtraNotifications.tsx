import * as React from 'react'

import DefaultPanel from '../../panels/DefaultPanel/DefaultPanel'
import {HorizontalSlide} from '../../../../generic/notifications/HorizontalSlide/HorizontalSlide'
import {ExtraNotificationItem, Props as ENProps} from '../ExtraNotifications/ExtraNotificationItem/ExtraNotificationItem'

interface Props {
 notifications: Array<ENProps>
}

const ExtraNotifications = (props: Props) => {

    const slideNotifications = props.notifications.map(n => {
        return(
            <ExtraNotificationItem title={n.title} timeSpan={n.timeSpan}/>
        )
    })

    return(
        <DefaultPanel headerItems={['Notifications']}>
            <HorizontalSlide slideItems={slideNotifications}/>
        </DefaultPanel>
    )
}

export default ExtraNotifications