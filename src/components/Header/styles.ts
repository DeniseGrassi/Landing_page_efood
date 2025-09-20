import styled from 'styled-components';
import { cores } from '../../styles';
import ImgFundo from '../../assets/fundo.png';

export const HeaderContainer = styled.div`
    background-image: url(${ImgFundo});
    background-size: cover;
    background-repeat: no-repeat;
    height: 384px;
    margin-bottom: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: 750px) {
        height: 300px;
    }
`;

export const HeaderLogo = styled.img`
    margin-top: 40px;
    width: 126px;
`;

export const HeaderTitle = styled.h1`
    font-size: 36px;
    margin-top: 180px;
    margin-bottom: 24px;
    font-family: 'Roboto', sans-serif;
    @media (max-width: 750px) {
        margin-top: 80px;
        font-size: 26px;
    }
`;


export const Wrapper = styled.header`  
  width: 100vw;
  margin-inline: calc(50% - 50vw);  
  background-color: ${cores.laranjaClaro};
  background-image: url(${ImgFundo});
  background-repeat: repeat;
  background-size: auto;
  padding: clamp(28px, 6vw, 64px) 0;
`

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--page-gap);
  text-align: center;
`
export const Titulo = styled.h1`
  margin-top: 24px;
  font-size: clamp(22px, 3.2vw, 36px);
  line-height: 1.2;
  color: ${cores.laranjaEscuro};
  `