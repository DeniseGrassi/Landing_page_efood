import styled from 'styled-components';
import Fundo from '../../assets/fundo.png';
import { cores } from '../../styles';
import LaDolce from '../../assets/LaDolce.png';

export const HeaderPerfil = styled.header`
    background-image: url(${Fundo});
    background-size: cover;
    background-position: center;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 200px;
`;

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;

    a {
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        color: ${cores.laranjaEscuro};
    }
`;

export const LogoPerfil = styled.img`
    height: 60px;
    margin: 0 auto;
`;

export const CartInfo = styled.p`
    font-size: 18px;
    color: ${cores.laranjaEscuro};
    font-weight: bold;
`;

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`;

export const Hero = styled.section`
    position: relative;
    background-image: url(${LaDolce});
    background-size: cover;
    background-position: center;
    height: 450px;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }

    ${Container} {
        position: relative;
        z-index: 2;
    }
`;

export const PerfilRestaurante = styled.h3`
    padding-top: 12px;
    margin-bottom: 260px;
    color: ${cores.branco};
    filter: brightness(80%);
    font-size: 32px;
    font-weight: 100;
`;

export const NomeRestaurante = styled.h3`
    color: ${cores.branco};
    font-size: 32px;
    font-weight: 900;
`;

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 56px;
`;

export const Card = styled.div`
    width: 320px;
    height: 338px;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 16px;
    border: solid 8px;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 185px;
    object-fit: cover;
`;

export const CardContent = styled.div`
    color: ${cores.laranjaClaro};
    background-color: ${cores.laranjaEscuro};
`;
export const CardTitle = styled.h4`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
    margin-top: 8px;
`;
export const CardDescription = styled.p`
    font-size: 14px;
    line-height: 1.5;
`;
export const AddButton = styled.button`
    width: 100%;
    height: 24px;
    background-color: ${cores.laranjaClaro};
    color: ${cores.laranjaEscuro};
    border: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 8px;
    &:hover {
        background-color: ${cores.laranjaEscuro};
        color: ${cores.laranjaClaro};
    }
`;
