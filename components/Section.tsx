import React from "react";

type Props = {
  title?: string;
  children?: React.ReactNode;
  image?: string;
  rightImg?: boolean;
  backgroundColor?: string;
  color?: string;
};

const Section = ({
  title,
  image,
  children,
  backgroundColor,
  color,
  rightImg,
}: Props) => {
  return (
    <section id={title} style={{ background: `${backgroundColor}`, color: `${color}` }}>
      {image && !rightImg  && (
        <div>
          <img src={image} alt="" />
        </div>
      )}
      <div className="p1">
        <h2>{title}</h2>
        {children}
      </div>
      {image && rightImg && (
        <div>
          <img src={image} alt="" />
        </div>
      )}
    </section>
  );
};

export default Section;
