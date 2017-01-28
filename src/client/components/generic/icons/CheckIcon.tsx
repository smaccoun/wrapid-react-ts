import * as React from 'react'

interface Props {
    width?: string
    height?: string
}
const CheckIcon = (props: Props) => {
    const width = props.width || '24px'
    const height = props.height || '24px'
    return(
        <svg height={height} width={width} version="1.1" viewBox="16 16 24 24">
            <defs/>
            <g id="ic_check_circle_black_24px" fill="none" stroke="none" strokeWidth="1" transform="translate(16.000000, 16.000000)">
                <polygon id="Shape" points="0 0 24 0 24 24 0 24"/>
                <path id="Shape" d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M10,17 L5,12 L6.41,10.59 L10,14.17 L17.59,6.58 L19,8 L10,17 Z" fill="#6D717A"/>
            </g>
        </svg>
    )
}

export default CheckIcon