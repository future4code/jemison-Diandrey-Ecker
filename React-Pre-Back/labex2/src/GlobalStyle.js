import { createGlobalStyle } from 'styled-components'
import background from './image/image_backgroud.jpg'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Helvetica, sans-serif;
    }
`

export const BackgroundContainer = styled.div`
        width: 100vw;
        height: 100vh;
        background-image: url(${background});
        background-size: cover;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
`

export const FormContainer = styled.div`
        padding-left: 15px;
        padding-right: 15px;
        width: 50vw;
        height: 50vh;
        background-color: #C0C0C0;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
            text-align: center;
            margin-bottom: 30px;
            font-size: 2rem;
        }

        Input {

        }

        label {
            width: 100%;
            font-size: 1,3rem;
            border-radius: 8px;
        }
`