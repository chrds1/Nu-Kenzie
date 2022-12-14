import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


    *{  
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font-family: 'nunito';
            vertical-align: baseline;
            box-sizing: border-box;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
            display: block;
        }
        body {
            line-height: 1;
        }
        ol, ul {
            list-style: none;
        }
        blockquote, q {
            quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
            content: '';
            content: none;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }
    }
`
export const HeaderStyle = styled.header`
    
    header{
        width: 100vw;
        max-width: 100%;
        min-width: 360px;
        padding: 1rem 2rem;
        background: #F8F9FA;
        box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);  
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo-nu{
        display: inline-flex;
    }
    .logo1{
        color: #FD377E;
        font-weight: 900;
        font-size: 1.5rem;

    }
    .logo2{
        color: #212529;
        font-weight: 900;
        font-size: 1.5rem;
    }
    button{
        border: none;
        border-radius: 8px;
        width: 3.5rem;
        height: 2rem;
        background: #E9ECEF;
        font-weight: 600;
        font-style: normal;
        font-size: 0.9rem;
        color: #5B6166;
    }

`
export const MainStyle = styled.main`
    main{
        width: 100vw;
        max-width: 94%;
        min-width: 360px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    aside{
        width: 100vw;
        max-width: 100%;
        margin: 1rem auto 1rem auto;
    }

    section{
        width: 100vw;
        max-width: 100%;
        margin: 1rem auto 1rem auto;
    }

    @media (min-width: 768px){
        main{
            display: flex;
            max-width: 94%;
            flex-direction: row;
            gap: 2rem;
            justify-content: space-between;
            align-items: flex-start;
            
        }
        aside{
            max-width: 35%;
            float: right; 

        }
        section{
            max-width: 60%;
           
        }
        







    }
`