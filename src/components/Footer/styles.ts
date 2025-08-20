import styled from 'styled-components';
import { cores } from '../../styles';

export const ContainerFooter = styled.div`
    background-color: ${cores.laranjaClaro};
    display: flex;
    justify-content: center;
    width: 100%;

    bottom: 0;
    margin-top: auto;
`;

export const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const DescricaoFooter = styled.p`
    margin-top: 15px;
    margin-bottom: 30px;
    max-width: 500px;
    font-size: 10px;
    font-weight: 400;
`;

export const Logo = styled.img`
    margin-top: 30px;
`;

export const RedesSociais = styled.img`
    margin-top: 15px;
`;
