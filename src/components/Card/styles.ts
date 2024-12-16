import styled from 'styled-components';
import { cores } from '../../styles';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
    flex-direction: column;
    justify-content: space-between; /* Distribui os elementos superior e inferior */
    align-items: flex-start; /* Alinha os itens à esquerda */
    min-height: 300px; /* Altura mínima para manter a consistência */
    max-width: 1240px; /* Largura fixa para consistência visual */
    margin: 0 auto;
    padding: 0 16px;
    display: flex; /* Adiciona o flexbox */
    gap: 16px; /* Espaçamento entre os cards */
    flex-wrap: wrap; /* Para garantir que os cards fiquem organizados em telas menores */
    justify-content: center; /*Centraliza os cards horizontalmente*/
    flex-wrap: wrap;
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
export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 7px 0 7px;
`;

export const CardTitulo = styled.h3`
    font-size: 18px;
    margin-left: 7px;
`;

export const AvaliacaoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Avaliacao = styled.ul`
    display: flex;
    align-items: center;
`;

export const AvaliacaoTexto = styled.li`
    font-size: 18px;
    font-weight: bold;
    margin-right: 8px;
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
        background-color: #e66751;
    }
`;

export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
`;

export const BotaoLink = styled(Link)`
    color: ${cores.laranjaClaro};
    text-decoration: none;
`;
