import { HeaderContainer, HeaderTitle, HeaderLogo } from './styles';
import logo from '../../assets/logo.png';

const Header = () => (
    <HeaderContainer>
        <HeaderLogo src={logo} alt="logo do Efood" />
        <HeaderTitle>
            {' '}
            Viva experiências gastronômicas <br /> no conforto da sua casa{' '}
        </HeaderTitle>
    </HeaderContainer>
);

export default Header;
