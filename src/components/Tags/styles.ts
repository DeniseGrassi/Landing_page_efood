import styled from 'styled-components';
import { cores } from '../../styles';
import { Props } from '.';

export const TagContainer = styled.div<Props>`
    background-color: ${cores.laranjaEscuro};
    color: ${cores.laranjaClaro};
    font-size: 12px;
    font-weight: bold;
    padding: ${(props) => (props.size === 'grande' ? '6px 4px' : '6px 10px')};
    display: inline-block;
    margin-left: 8px;
`;
