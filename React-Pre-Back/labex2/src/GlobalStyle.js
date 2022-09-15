import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --black: #0000
        --soft-white: #f2f2f2;
        --green: #8bcf21;
        --yellow: #Ffcb16;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Helvetica, sans-serif;
    }

    body {
        height: 100vh;
        width: 100vw;
    }

    input, label {
        display: block;
        width: 100%;
    }

    .backImg {
        background-size: cover;
        /* opacity: 0.5; */
    }

    //form

    .main-container {
        padding-top: 5vh;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        background-color: white;
        border-radius: 10px;
        padding: 25px;
    }

    .main-container h1 {
        text-align: center;
        margin-bottom: 25px;
        font-size: 1.6rem;
    }

    input {
        padding: 5px;
        border-radius: 8px;
        margin-bottom: 30px;
    }
`