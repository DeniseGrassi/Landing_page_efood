// src/models/restaurantesDetalhes.ts
import pizzaPerfil from "../assets/imgperfil.png"
import pizzaMarguerita from "../assets/pizza.png"
import pizzaCalabresa from "../assets/pizzacalabresa.jpg"
import pizzaCamarao from "../assets/pizza-camarao-com-catupiry.jpg"
import trattoriaFrente from "../assets/trattoriafrente.jpg"
import fettucineFrutosDoMar from "../assets/LaDolce.png"
import spaghettiPomodoro from "../assets/pomodoro.jpg"
import sushiDeliFrente from "../assets/capaSushiDele.jpg"
import yakisobaMar from "../assets/yakisobaMar.jpg"
import combinadoSushi from "../assets/combinado-sushi.jpg"
import picanha from "../assets/picanha.jpg"
import carneDoSol from "../assets/carnedosol.jpg"
import fundoChurrascaria from "../assets/fotoFundoChurrascaria.jpg"

export type Prato = {
    id: number;
    nome: string;
    descricao: string;
    foto: string;
    preco: number;
    porcao: string;
};

export type RestauranteDetalhe = {
    id: number;
    capa: string;
    tipo: string;
    titulo: string;
    cardapio: Prato[];
};

const restaurantesDetalhes: RestauranteDetalhe[] = [
    {
        id: 1,
        capa: pizzaPerfil,
        tipo: "Italiana",
        titulo: "Pizzaria Sabor a Lenha",
        cardapio: [
            {
                id: 101,
                nome: "Pizza Marguerita",
                descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
                foto: pizzaMarguerita,
                preco: 79.9,
                porcao: "2 pessoas"
            },
            {
                id: 102,
                nome: "Pizza Calabresa",
                descricao: "Deliciosa pizza preparada com generosas fatias de calabresa levemente defumada, coberta com molho artesanal de tomate, queijo muçarela derretido e finalizada com cebola em rodelas e orégano.",
                foto: pizzaCalabresa,
                preco: 89.9,
                porcao: "2 pessoas"
            },
            {
                id: 103,
                nome: "Pizza Camarão com Catupiry",
                descricao: "Uma combinação irresistível do sabor marcante do camarão refogado com temperos especiais, coberto pelo cremoso Catupiry. Finalizada com queijo derretido e um toque de orégano, essa pizza une sofisticação e cremosidade em cada fatia. Ideal para quem busca uma opção refinada e cheia de sabor.",
                foto: pizzaCamarao,
                preco: 89.9,
                porcao: "2 pessoas"
            },
        ]
    },
    {
        id: 2,
        capa: trattoriaFrente,
        tipo: "La Dolce Vitta Trattoria",
        titulo: "Trattoria",
        cardapio: [
            {
                id: 201,
                nome: "Fettucine frutos do mar",
                descricao: "Massa ao dente com camarões, lulas e mexilhões em molho cremoso aromatizado com vinho branco e ervas.",
                foto: fettucineFrutosDoMar,
                preco: 99.9,
                porcao: "1 pessoa"
            },
            {
                id: 202,
                nome: "Spaghetti Pomodoro",
                descricao: "Massa ao dente servida com molho de tomates frescos, azeite e manjericão.",
                foto: spaghettiPomodoro,
                preco: 69.9,
                porcao: "1 pessoa"
            }
        ]
    },
    {
        id: 3,
        capa: sushiDeliFrente,
        tipo: "Sushi Deli",
        titulo: "Sushi Deli",
        cardapio: [
            {
                id: 301,
                nome: "Yakisoba Frutos do Mar",
                descricao: "Macarrão oriental com cenoura, repolho verde, repolho roxo, polvo, lula, kani e camarão",
                foto: yakisobaMar,
                preco: 99.9,
                porcao: "2 pessoa"
            },
            {
                id: 302,
                nome: "Combinado de Sushi",
                descricao: "Uma seleção especial de sushis frescos e coloridos, preparados com peixes de qualidade premium e arroz temperado no ponto certo.",
                foto: combinadoSushi,
                preco: 149.9,
                porcao: "2 pessoa"
            }
        ]
    },
    {
        id: 4,
        capa: fundoChurrascaria,
        tipo: "Churrascaria",
        titulo: "Boi na Brasa",
        cardapio: [
            {
                id: 401,
                nome: "Picanha",
                descricao: "Picanha suculenta, grelhada no ponto perfeito para realçar seu sabor inconfundível, acompanhada de guarnições selecionadas. Uma experiência que une maciez, aroma defumado e a intensidade de uma das carnes mais nobres do churrasco brasileiro",
                foto: picanha,
                preco: 99.9,
                porcao: "2 pessoa"
            },
            {
                id: 402,
                nome: "Carne do Sol",
                descricao: "Carne de sol macia e saborosa, preparada no ponto certo e servida com acompanhamentos típicos, como arroz, feijão verde, farofa e macaxeira frita. Um prato que resgata a essência da culinária nordestina.",
                foto: carneDoSol,
                preco: 89.9,
                porcao: "2 pessoa"
            }
        ]
    }
];

export default restaurantesDetalhes;

