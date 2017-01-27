import * as React from 'react'

import DefaultPanel from '../../panels/DefaultPanel/DefaultPanel'
import {ExtraNotificationItem, Props as ENProps} from '../ExtraNotifications/ExtraNotificationItem/ExtraNotificationItem'

interface Props {
 notifications: Array<ENProps>
}

var Slider = require('react-slick');
var settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const ExtraNotifications = (props: Props) => {

    const slideNotifications = props.notifications.map((n, key) => {
        return(
            <div key={key} style={{width: '259px', height: '78px'}}>
                <ExtraNotificationItem title={n.title} timeSpan={n.timeSpan}/>
            </div>
        )
    })

    return(
        <DefaultPanel headerItems={['Notifications']}>
            <Slider {...settings}>
                {slideNotifications}
            </Slider>
        </DefaultPanel>
    )
}

export default ExtraNotifications