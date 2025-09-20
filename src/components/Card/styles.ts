import styled from 'styled-components'
import { cores, bp } from '../../styles'
import { Link } from 'react-router-dom'

export const CardContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

export const CardUnit = styled.div`
  background-color: ${cores.corFundo};
  width: 100%;
  border: 1px solid ${cores.laranjaEscuro};
  display: flex;
  flex-direction: column;
  position: relative;
`

export const CardImg = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  display: block;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 8px 0 8px;

  @media (max-width: ${bp.sm}px){
    gap: 8px;
    align-items: flex-start;
    flex-direction: column;
  }
`

export const CardTitulo = styled.h3`
  font-size: clamp(16px, 1.8vw, 18px);
`

export const AvaliacaoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Avaliacao = styled.ul`
  display: flex;
  align-items: center;
`

export const AvaliacaoTexto = styled.li`
  font-size: clamp(14px, 1.6vw, 18px);
  font-weight: bold;
  margin-right: 8px;
`

export const CardDescricao = styled.p`
  font-size: clamp(13px, 1.4vw, 14px);
  margin: 12px 8px;
  line-height: 1.5;
`

export const CardBotao = styled.button`
  background-color: ${cores.laranjaEscuro};
  color: ${cores.laranjaClaro};
  border: none;
  padding: 6px 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  margin: 0 0 12px 8px;
  align-self: flex-start;

  &:hover { background-color: #e66751; }

  @media (max-width: ${bp.sm}px){
    width: calc(100% - 16px); /* cheio na largura no mobile */
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const BotaoLink = styled(Link)`
  color: ${cores.laranjaClaro};
  text-decoration: none;
`
