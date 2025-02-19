import styled from 'styled-components';
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
    font-family: 'Roboto', sans-serif;
    @media (max-width: 750px) {
        margin-top: 80px;
        font-size: 26px;
    }
`;
