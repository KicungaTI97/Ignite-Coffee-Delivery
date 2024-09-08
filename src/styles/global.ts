import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
   body, button{
    font-family: 'Roboto', sans-serif;
    background: ${props => props.theme.background};
   }
   
`