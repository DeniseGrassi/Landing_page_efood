import styled from 'styled-components'
import { cores } from '../../styles'

export const Wrapper = styled.footer`
  /* ocupa toda a largura da janela (igual ao header) */
  width: 100vw;
  margin-inline: calc(50% - 50vw);
  background: ${cores.laranjaClaro};
  padding: clamp(24px, 5vw, 48px) 0;
`

export const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--page-gap);
  text-align: center;

  img[alt='efood'] {
    display: block;
    margin: 0 auto 16px;
  }
`

/* A imagem com as três bolinhas (um arquivo só) */
export const SocialImg = styled.img`
  display: block;
  margin: 8px auto 12px;
  width: clamp(88px, 10vw, 128px); /* ajusta de forma responsiva */
  height: auto;
`

export const Copy = styled.p`
  color: ${cores.laranjaEscuro};
  font-size: 12px;
  line-height: 1.4;
  opacity: .9;
`
