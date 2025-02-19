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
        /* overflow: hidden; */
    }

    body {
        background-color: ${cores.corFundo};
        color: ${cores.laranjaEscuro};
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
        #root {
        display: flex;
        flex-direction: column;
                flex-grow: 1;
        min-height: 100vh; 
        /* height: 100%; Garante que o conteúdo ocupe toda a tela */
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%; /* Isso impede que o Container fique menor que a tela */
    width: 100%;
    flex-grow: 1; /* Isso força ele a ocupar todo o espaço disponível */
`;

export const Content = styled.div`
    flex-grow: 1;
    width: 100%;
`;

export default GlobalCss;
