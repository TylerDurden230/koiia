import { type } from 'os'
import React from 'react'

type Props = {
    title?: string,
    children?: React.ReactNode,
    image?: any,
    backgroundColor?: string,
    color?: string,
}

const Cover = ({image, children, title, backgroundColor, color} : Props) => {
  return (
    <div className='cover' style={{ background: `${backgroundColor}`, color: `${color}`}}>
        <div className='fadeInLeftToRight w60'>
            <img 
              src={image} 
              alt="cover" 
              className='' 
            />
        </div>
        <div className='cover__content fadeIn'>
            <h1 style={{color: `${color}`}}>{title}</h1>
            {children}
        </div>
    </div>
  )
}

export default Cover
