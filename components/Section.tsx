import React from 'react'

type Props = {
    title?: string,
    children?: React.ReactNode,
    image?: string,
    backgroundColor?: string,
}

const Section = ({title, image, children, backgroundColor} : Props) => {
  return (
    <section id={title} style={{backgroundColor: `${backgroundColor}`}}>
        {image && <div>
            <img src={image} alt="" />
        </div>}
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    </section>
  )
}

export default Section
