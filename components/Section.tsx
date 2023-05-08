import React from "react";

type Props = {
  title?: string;
  children?: React.ReactNode;
  image?: string;
  rightImg?: boolean;
  backgroundColor?: string;
};

const Section = ({
  title,
  image,
  children,
  backgroundColor,
  rightImg,
}: Props) => {
  return (
    <section id={title} style={{ backgroundColor: `${backgroundColor}` }}>
      {image && !rightImg && (
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
