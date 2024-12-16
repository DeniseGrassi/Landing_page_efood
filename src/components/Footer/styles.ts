import styled from 'styled-components';
import { cores } from '../../styles';

export const ContainerFooter = styled.div`
    background-color: ${cores.laranjaClaro};
    margin-top: 120px;
    display: flex;
    justify-content: center;
`;

export const FooterDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const DescricaoFooter = styled.p`
    margin-top: 80px;
    margin-bottom: 40px;
    max-width: 500px;
    font-size: 10px;
    font-weight: 400;
`;


export const Logo = styled.img`
    margin-top: 34px;
`;

export const RedesSociais = styled.img`
    margin-top: 34px;
`;
