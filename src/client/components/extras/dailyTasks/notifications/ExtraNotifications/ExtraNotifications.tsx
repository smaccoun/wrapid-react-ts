import * as React from 'react'


import {ExtraNotificationItem, Props as ENProps} from '../ExtraNotifications/ExtraNotificationItem/ExtraNotificationItem'
import CheckIcon from "../../../../generic/icons/CheckIcon";
import DefaultPanel from "../../../../generic/panels/DefaultPanel/DefaultPanel";

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

    const checkIcon = <CheckIcon />
    const slideNotifications = props.notifications.map((n, key) => {
        const icon = n.icon || checkIcon
        return(
            <div key={key} style={{width: '259px', height: '78px'}}>
                <ExtraNotificationItem title={n.title} timeSpan={n.timeSpan} icon={icon}/>
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