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

export const Voltar = styled.img`
    height: 30px;
    margin-right: 8px;
    padding-top: 12px;
`;

export const ContainerVoltar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
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
    width: 360px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 16px;
    border: solid 8px;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 200px;
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

export const AbrirModal = styled.button`
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
        background-color: ${cores.corFundo};
        color: ${cores.laranjaEscuro};
    }
`;
export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
`;
export const ModalContent = styled.div`
    background: ${cores.laranjaEscuro};
    width: 1024px;
    height: 344px;
    position: absolute;
    display: flex;
    padding: 24px;
    img:first-child {
        cursor: pointer;
        position: absolute;
        top: 16px;
        right: 16px;
    }
    img:nth-child(2) {
        width: 280px;
        height: 280px;
        margin-right: 24px;
        object-fit: fill;
    }
    h3 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 16px;
        color: ${cores.laranjaClaro};
    }
    p {
        margin-bottom: 16px;
        font-size: 14px;
        line-height: 22px;
        color: ${cores.laranjaClaro};
    }
`;

export const Carregando = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    transform: scale(3);

    .c-loader {
        animation: is-rotating 1s infinite;
        width: 50px;
        height: 50px;
        border: 6px solid ${cores.laranjaClaro};
        border-radius: 50%;
        border-top-color: ${cores.laranjaEscuro};

        @keyframes is-rotating {
            to {
                transform: rotate(2turn);
            }
        }
    }
`;
