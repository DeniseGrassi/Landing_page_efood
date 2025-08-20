import styled from 'styled-components';
import { cores } from '../../styles';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 16px;
`;

export const CardUnit = styled.div`
    background-color: ${cores.corFundo};
    width: 100%;
    height: 90%;
    max-width: 472px;
    margin-bottom: 48px;
    border: 1px solid ${cores.laranjaEscuro};
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const CardImg = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
`;

export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 8px 0 8px;
`;

export const CardTitulo = styled.h3`
    font-size: 18px;
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
    margin: 12px 8px;
    line-height: 1.5;
`;

export const CardBotao = styled.button`
    background-color: ${cores.laranjaEscuro};
    color: ${cores.laranjaClaro};
    border: none;
    padding: 4px 6px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    margin-left: 8px;
    margin-bottom: 12px;
    margin-top: auto;
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
