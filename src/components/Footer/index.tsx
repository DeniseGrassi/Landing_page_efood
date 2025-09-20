import logo from '../../assets/logo.png'
import redes from '../../assets/redesSociais.png'  
import { Wrapper, Inner, SocialImg, Copy } from './styles'

export default function Footer() {
  return (
    <Wrapper>
      <Inner>
        <img src={logo} alt="efood" width={96} height={48} />        
        <SocialImg src={redes} alt="" aria-hidden="true" />

        <Copy>
          A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega,
          qualidade dos produtos e toda do estabelecimento contratado.
        </Copy>
      </Inner>
    </Wrapper>
  )
}

