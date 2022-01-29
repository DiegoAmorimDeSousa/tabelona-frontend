import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body, html {
        font-size: 16px;
        background: #131319;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: white;
        font-family: 'Roboto Mono', monospace;
    }

    img {
        object-fit: contain;
    }

    li {
        list-style: none;
        font-weight: bold;
        cursor: pointer;
    }
`

export default GlobalStyles;