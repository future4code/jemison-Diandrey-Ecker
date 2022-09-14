import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --black: #0000
        --soft-white: #f2f2f2;
        --green: #8bcf21;
        --yellow: #Ffcb16;
        text-align: center;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`