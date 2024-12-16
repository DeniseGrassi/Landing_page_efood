import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Pizza from '../../assets/pizza.png';
import {
    AddButton,
    Card,
    CardContent,
    CardDescription,
    CardImage,
    CardsGrid,
    CardTitle,
    CartInfo,
    Container,
    HeaderPerfil,
    Hero,
    LogoPerfil,
    NavContainer,
    NomeRestaurante,
    PerfilRestaurante,
} from './styles';

const Perfil: React.FC = () => {
    return (
        <div>
            <HeaderPerfil>
                <NavContainer>
                    <Link to="/">Restaurantes</Link>
                </NavContainer>
                <LogoPerfil src={logo} alt="Logo Efood" />
                <CartInfo>
                    <span> 0 </span> produto(s) no carrinho
                </CartInfo>
            </HeaderPerfil>

            <Hero>
                <Container>
                    <PerfilRestaurante>Italiana</PerfilRestaurante>
                    <NomeRestaurante>La Dolce Vitta Trattoria</NomeRestaurante>
                </Container>
            </Hero>
            <section>
                <Container>
                    <CardsGrid>
                        {[...Array(6)].map((_, index) => (
                            <Card key={index}>
                                <CardImage src={Pizza} alt="Pizza" />
                                <CardContent>
                                    <CardTitle>Pizza Marguerita</CardTitle>
                                    <CardDescription>
                                        A clássica Marguerita: molho de tomate
                                        suculento, mussarela derretida,
                                        manjericão fresco e um toque de azeite.
                                        Sabor e simplicidade!
                                    </CardDescription>
                                    <AddButton>Adicionar ao carrinho</AddButton>
                                </CardContent>
                            </Card>
                        ))}
                    </CardsGrid>
                </Container>
            </section>
            <footer></footer>
        </div>
    );
};

export default Perfil;
