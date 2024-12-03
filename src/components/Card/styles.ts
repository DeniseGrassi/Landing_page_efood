import styled from 'styled-components';
import { cores } from '../../styles';

export const CardContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex; /* Adiciona o flexbox */
    gap: 16px; /* Espaçamento entre os cards */
    flex-wrap: wrap; /* Para garantir que os cards fiquem organizados em telas menores */
    justify-content: center; /* Centraliza os cards horizontalmente */
`;

export const CardUnt = styled.div`
    background-color: ${cores.corFundo};
    width: 100%;
    max-width: 472px;
    margin-bottom: 48px;
    border: 1px solid ${cores.laranjaEscuro};
    display: flex;
    flex-direction: column;
    position: relative;
    flex-grow: 1; /* Faz os cards crescerem igualmente, se necessário */
`;

export const CardImg = styled.img`
    width: 100%;
    height: 217px;
    object-fit: cover;
`;

export const CardTitulo = styled.h3`
    font-size: 18px;
    margin-left: 7px;
`;
export const CardDescricao = styled.p`
    font-size: 14px;
    margin-top: 16px;
    line-height: 1.5;
    margin-left: 7px;
    margin-right: 7px;
`;

export const CardBotao = styled.button`
    background-color: ${cores.laranjaEscuro};
    color: ${cores.laranjaClaro};
    border: none;
    padding: 4px 6px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    margin: 16px 7px 8px 7px;
    align-self: flex-start;

    &:hover {
        background-color: #e66750;
    }
`;

export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`;
