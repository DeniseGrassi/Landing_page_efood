import styled from 'styled-components';
import Fundo from '../../assets/fundo.png';
import { cores } from '../../styles';
import LaDolce from '../../assets/LaDolce.png';
import { bp } from '../../styles'

export const HeaderPerfil = styled.header`
  background-image: url(${Fundo});
  background-size: cover;
  background-position: center;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 200px;
  padding-inline: var(--page-gap);
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  @media (max-width: ${bp.md}px){
    flex-direction: column;
    align-items: flex-start;
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

export const CartInfo = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  font-weight: bold;

  @media (max-width: ${bp.md}px){
    align-self: stretch;
  }
`

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;


export const Hero = styled.section`
  position: relative;
  background-image: url(${LaDolce});
  background-size: cover;
  background-position: center;
  height: 450px;

  display: flex;
  align-items: flex-end;     
  justify-content: flex-start;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;


export const HeroInner = styled.div`
  position: relative;        
  z-index: 2;               
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px 32px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;   
  text-align: left;           
`;

export const PerfilRestaurante = styled.span`
  position: absolute;
  top: -300px;
  left: 30px;
  color: ${cores.branco};
  font-size: 20px;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0,0,0,.1);
`;

export const NomeRestaurante = styled.h3`
  margin: 0 0 10px 30px;
  color: ${cores.branco};
  font-size: 32px;
  font-weight: 900;
`;


export const CardsGrid = styled.ul`
  display: grid;
  gap: var(--card-gap);

  grid-template-columns: repeat(auto-fit, minmax(280px, 360px));
  justify-content: center;  
  justify-items: center;  

  
  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, minmax(280px, 360px));
  }
  @media (max-width: 1099px) and (min-width: 700px) {
    grid-template-columns: repeat(2, minmax(280px, 360px));
  }
  @media (max-width: 699px) {
    grid-template-columns: minmax(280px, 1fr);
  }
`;


export const Card = styled.div`
  width: 360px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 16px;
  border: solid 8px;
  background: #fff;
`;


export const CardImageWrap = styled.div`
  width: 100%;
  aspect-ratio: 4 / 3;   
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;      
  object-fit: cover;  
  display: block;
  object-position: center;
`;


export const CardContent = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  background-color: ${cores.laranjaEscuro};
  color: ${cores.laranjaClaro};
  padding: 12px 16px 16px;
`;


export const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
`;

export const CardDescription = styled.p`
  font-size: 18px;
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

  &:hover {
    background-color: ${cores.corFundo};
    color: ${cores.laranjaEscuro};
  }

  @media (max-width: ${bp.sm}px){
    width: 100%;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);

  display: grid;
  place-items: center;
  padding: 24px;
`;

export const ModalContent = styled.div`
  position: relative;

  background: ${cores.laranjaEscuro};
  color: ${cores.laranjaClaro};
  border-radius: 4px;

  /* largura/altura sempre dentro da viewport */
  width: min(920px, 100%);
  max-height: calc(100vh - 48px);
  overflow: auto;

  /* layout */
  display: grid;
  grid-template-columns: minmax(260px, 1fr) minmax(260px, 1fr);
  gap: 16px;
  padding: 16px;

  /* textos */
  h3 {
    margin: 4px 0 8px;
    font-size: clamp(18px, 2.4vw, 22px);
    line-height: 1.2;
  }
  p {
    margin: 8px 0;
    line-height: 1.5;
    word-break: break-word;
  }

  /* empilha no mobile */
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    padding: 12px;
    border-radius: 6px;
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
  }

  @keyframes is-rotating {
    to { transform: rotate(2turn); }
  }
`;

export const PratoImagem = styled.img`
  width: 100%;
  height: auto;
  max-height: min(60vh, 480px);
  object-fit: cover;
  display: block;
  border-radius: 4px;
`;

export const FecharModal = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 2;
`;
