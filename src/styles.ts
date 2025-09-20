import styled, { createGlobalStyle } from 'styled-components';

export const cores = {
    corFundo: '#FFF8F2',
    laranjaEscuro: '#E66767',
    laranjaClaro: '#FFEBD9',
    branco: '#fff',
    cinzaClaro: '#ECEBE9',
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: Roboto, sans-serif;
    
    }

        html, body, #root {
        height: 100%;

    }

    body {
        background-color: ${cores.corFundo};
        color: ${cores.laranjaEscuro};
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    :root{
        --page-gap: clamp(12px, 2vw, 24px);
        --card-gap: clamp(16px, 2.2vw, 24px);
    }
    #root {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        min-height: 100vh;
    }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1;
  padding-inline: var(--page-gap);
  max-width: 1200px;
  margin: 0 auto;
`

export const Content = styled.div`
    flex-grow: 1;
    width: 100%;
`;

export const bp = {
    xs: 360,
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1280
}


export default GlobalCss;
