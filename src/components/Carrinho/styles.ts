import styled from 'styled-components';
import { cores } from '../../styles';
import InputMask from 'react-input-mask'

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8); 
    z-index: 99; /* Z-index para ficar atrás do carrinho */
`;
export const Vazio = styled.p`
    color: ${cores.laranjaClaro};
    font-size: 30px;
`;

export const CarrinhoContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 360px;
    z-index: 100; /* Z-index maior que o overlay */
    display: flex;
    justify-content: flex-end;
`;

export const BarraLateral = styled.aside`
    width: 360px;
    background-color: ${cores.laranjaEscuro};
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ProdutoLista = styled.ul`
  width: 100%;
  margin-top: 30px;
  p { color: ${cores.laranjaClaro}; }  
`


export const ProdutoItem = styled.li`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    background-color: ${cores.laranjaClaro};
    color: ${cores.laranjaEscuro};
    padding: 10px;
    margin-bottom: 10px;
`;

export const ProdutoImagem = styled.img`
    width: 90px;
    height: 90px;
    object-fit: cover;
`;

export const ProdutoInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex: 1;
    margin-left: 10px;
`;

export const ProdutoNome = styled.h3`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
`;

export const ProdutoPreco = styled.p`
    font-size: 14px;
`;

export const IconeLixeira = styled.img`
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: 8px;
    right: 8px;
`;

export const Total = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    color: ${cores.laranjaClaro};
`;

export const BotaoContinuar = styled.button`
    width: 100%;
    padding: 8px;
    margin-top: 10px;
    background-color: ${cores.laranjaClaro};
    color: ${cores.laranjaEscuro};
    font-size: 14px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    margin-top: 16px;


    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        pointer-events: none;
  }
`;

export const SecaoTitulo = styled.h4`
  color: ${cores.laranjaClaro};
  margin: 16px 0 8px;
  font-weight: bold;
`

export const Campo = styled.div`
  width: 100%;
  margin-bottom: 8px;
`

export const Label = styled.label`
  display: block;
  font-size: 12px;
  color: ${cores.laranjaClaro};
  margin-bottom: 4px;
`

export const Input = styled.input`
  width: 100%;
  height: 32px;
  background: ${cores.laranjaClaro};
  color: ${cores.laranjaEscuro};
  border: none;
  padding: 0 8px;
  outline: none;
`

export const InputMascara = styled(InputMask)`
  width: 100%;
  height: 32px;
  background: ${cores.laranjaClaro};
  color: ${cores.laranjaEscuro};
  border: none;
  padding: 0 8px;
  outline: none;
`

export const Linha = styled.div`
  display: flex;
  gap: 8px;
`

export const BotoesLinha = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  margin-top: 8px;
`

export const BotaoSecundario = styled(BotaoContinuar)`
  background: transparent;
  color: ${cores.laranjaClaro};
  border: 1px solid ${cores.laranjaClaro};
`
export const Confirmacao = styled.div`
  color: ${cores.laranjaClaro};
  font-size: 14px;
  line-height: 1.5;

    p + p {
    margin-top: 12px;
  }
`


