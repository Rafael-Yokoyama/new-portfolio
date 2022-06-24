import React from "react";
import * as C from "./styles";


interface Props {
    children:string,
    href:string
}

const ExternalLink:React.FC<Props> = ({ children, href }) => {
  return (
    <C.ExternalLink href={href} target="_blank">
      {children}
    </C.ExternalLink>
  );
};

export default ExternalLink;