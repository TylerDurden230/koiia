import React from "react";

type Props = {
  colums?: number;
  children: React.ReactNode;
};
const Footer = ({ colums, children }: Props) => {
  return (
    <footer className={`bg-gray-800 w-full grid-${colums}`}>{children}</footer>
  );
};
export default Footer;
