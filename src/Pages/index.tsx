import ListaRestaurantes from '../components/ListaRestaurantes';
import Card from '../models/Restaurante';
import japones from '../assets/hioki_sushi.png';
import estrela from '../assets/estrelaNota.png';
import laDolce from '../assets/LaDolce.png';

const restaurantesDaEfood: Card[] = [
    {
        id: 1,
        imagem: japones,
        infos: ['Destaque da semana', 'Japonesa'],
        titulo: 'Hioki Sushi',
        nota: '4.9',
        imageEstrela: estrela,
        descricao:
            'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    },
    {
        id: 2,
        imagem: laDolce,
        infos: [' Italiana'],
        titulo: 'La Dolce Vita Trattoria',
        nota: '4.6',
        imageEstrela: estrela,
        descricao:
            'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    },
];
const Home = () => (
    <>
        <ListaRestaurantes restaurante={restaurantesDaEfood} />
        <ListaRestaurantes restaurante={restaurantesDaEfood} />
        <ListaRestaurantes restaurante={restaurantesDaEfood} />
    </>
);
export default Home;
