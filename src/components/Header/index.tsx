import { Wrapper, Inner, Titulo, HeaderLogo } from './styles'
import logo from '../../assets/logo.png';

const Header = () => (
    <Wrapper>
        <Inner>
        <HeaderLogo src={logo} alt="logo do Efood" />
        <Titulo>
            {' '}
            Viva experiências gastronômicas <br /> no conforto da sua casa{' '}
        </Titulo>
        </Inner>
    </Wrapper>
);

export default Header;
