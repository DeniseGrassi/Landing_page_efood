import logo from '../../assets/logo.png';
import redesSociais from '../../assets/redesSociais.png';

import {
    ContainerFooter,
    DescricaoFooter,
    FooterDiv,
    Logo,
    RedesSociais,
} from './styles';

const Footer = () => (
    <ContainerFooter>
        <FooterDiv>
            <Logo src={logo} alt="logo do efood" />
            <RedesSociais src={redesSociais} />
            <DescricaoFooter>
                A efood é uma plataforma para divulgação de estabelecimentos, a
                responsabilidade pela entrega, qualidade <br /> dos produtos é
                toda do estabelecimento contratado.
            </DescricaoFooter>
        </FooterDiv>
    </ContainerFooter>
);
export default Footer;
