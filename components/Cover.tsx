import { type } from 'os'
import React from 'react'

type Props = {
    title?: string,
    children?: React.ReactNode,
    image?: any,
}

const Cover = ({image, children, title} : Props) => {
  return (
    <div className='cover'>
        <div className='fadeInLeftToRight w60'>
            <img src={image} alt="cover" className=''/>
        </div>
        <div className='cover__content fadeIn'>
            <h1>{title}</h1>
            {children}
        </div>
    </div>
  )
}

export default Cover
