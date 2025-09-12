import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    outline:0px;

    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

     * {
    scrollbar-width: auto;
    scrollbar-color: #878787 #ffffff;
  }
  /* Firefox */
  *::-webkit-scrollbar {
    width: 4px;
  }

::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0,0,0,0.2);
  border-radius: 4px;
}
  //AntDesign fix CSS
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section { 
   margin: 0; 
   padding: 0; 
   font-family: 'Poppins';
 } 

`;
