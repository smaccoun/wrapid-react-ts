import * as React from 'react'

import DefaultPanel from '../../panels/DefaultPanel/DefaultPanel'
import {HorizontalSlide, HorizontalSlideItem} from '../../../../generic/notifications/HorizontalSlide/HorizontalSlide'

interface Props {
 notifications: Array<any>
}

const ExtraNotifications = (props: Props) => {

    const slideNotifications = props.notifications.map(n => {
        return(
            <HorizontalSlideItem />
        )
    })

    return(
        <DefaultPanel headerItems={['Notifications']}>
            <HorizontalSlide slideItems={slideNotifications}/>
        </DefaultPanel>
    )
}

export default ExtraNotifications