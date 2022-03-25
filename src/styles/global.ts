
import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize';
import { devices } from './devices';

export default createGlobalStyle`
${normalize}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  transition:background ease 0.2s; 
}

@-ms-viewport {
     width: device-width;
   }

h1{
  margin: 0;
}

textarea,button,input{
  background-color: transparent;
  border:none;
}

a  {
  text-decoration: none;
}

button {
   box-shadow: none;
     cursor: pointer;
     outline: none;
     padding: 0;
     -webkit-box-shadow: none;
   }
 

 button , a {
   transition: all ease 0.4s;
   &:hover{
     ${props => props.theme.configs.hover}
   }
 }

ul {
  list-style: none;
}

::-webkit-scrollbar{
  width: 0.4rem;
  height: 0.4rem;
}
`;