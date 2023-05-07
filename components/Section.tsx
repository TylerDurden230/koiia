import React from 'react'

type Props = {
    title: string,
    children: React.ReactNode,
    image: string,
}

const Section = ({title, image, children} : Props) => {
  return (
    <section id={title}>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    </section>
  )
}

export default Section
