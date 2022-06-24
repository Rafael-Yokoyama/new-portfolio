import React from "react";
import * as C from "./styles";

interface Props {
    // any props that come into the component
}

const Button:React.FC<Props>  = ({ children, ...props }) => {
  return <C.Button {...props}>{children}</C.Button>;
};

export default Button;
