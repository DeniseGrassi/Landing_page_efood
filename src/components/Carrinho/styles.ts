import styled from 'styled-components';
import { cores } from '../../styles';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8); /* Overlay com 80% de opacidade */
    z-index: 99; /* Z-index para ficar atrás do carrinho */
`;
export const Vazio = styled.p`
    color: ${cores.laranjaClaro};
    font-size: 30px;
`;

export const CarrinhoContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 360px;
    z-index: 100; /* Z-index maior que o overlay */
    display: flex;
    justify-content: flex-end;
`;

export const BarraLateral = styled.aside`
    width: 360px;
    background-color: ${cores.laranjaEscuro};
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ProdutoLista = styled.ul`
    width: 100%;
    margin-top: 30px;
    p {
        ${cores.laranjaClaro}
    }
`;

export const ProdutoItem = styled.li`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: ${cores.laranjaClaro};
    color: ${cores.laranjaEscuro};
    padding: 10px;
    margin-bottom: 10px;
`;

export const ProdutoImagem = styled.img`
    width: 90px;
    height: 90px;
    object-fit: cover;
`;

export const ProdutoInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    margin-left: 10px;
`;

export const ProdutoNome = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const ProdutoPreco = styled.p`
    font-size: 14px;
`;

export const IconeLixeira = styled.img`
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: 8px;
    right: 8px;
`;

export const Total = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    color: ${cores.laranjaClaro};
`;

export const BotaoContinuar = styled.button`
    width: 100%;
    padding: 8px;
    margin-top: 10px;
    background-color: ${cores.laranjaClaro};
    color: ${cores.laranjaEscuro};
    font-size: 14px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    margin-top: 16px;
`;
