import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


  :root {
    --color-primary: #ff577f;
    --color-primary-focus: #ff427f;
    --color-primary-negative: #59323f;
    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343b41;
    --color-grey-1: #868e96;
    --color-grey-0: #f8f9fa;

    --success: #3fe864;
    --negative: #e83f5b;

    --font-size-main-title:26px;
    --font-size-title1: 20px;
    --font-size-title2: 18px;
    --font-size-title3: 16px;
    --font-size-title4: 14px;
    --font-size-headline: 12px;
    --font-size-mobile: 9px;
    --font-bold: 700;
    --font-regular: 400;

  }

  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    a{
        color: unset;
        text-decoration: none;
    }
    ul, ol, li{
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6, p, a, span, li, button, input,label{
        font-family: 'Inter';
    }
`;
