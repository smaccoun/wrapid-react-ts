import * as React from 'react'
import * as DOM from 'react-dom'
import ReactElement = React.ReactElement;


interface Props {
    slideItems: Array<ReactElement<any>>
}

const HorizontalSlide = (props: Props) => {
    return(
        <div>
            {props.slideItems.map((slideItem, key) => {
                return(
                    <HorizontalSlideItem />
                )
            })}
        </div>
    )
}

const HorizontalSlideItem = () => {
    return(
        <div>
            Slide item!
        </div>
    )

}

export {HorizontalSlide, HorizontalSlideItem};