// src/models/restaurantesDetalhes.ts
import pizzaPerfil from "../assets/imgperfil.png"
import pizzaMarguerita from "../assets/pizza.png"
import trattoriaFrente from "../assets/trattoriafrente.jpg"
import fettucineFrutosDoMar from "../assets/LaDolce.png"
import spaghettiPomodoro from "../assets/pomodoro.jpg"
import sushiDeliFrente from "../assets/capaSushiDele.jpg"
import yakisobaMar from "../assets/yakisobaMar.jpg"

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
                preco: 39.9,
                porcao: "2 pessoas"
            },
            {
                id: 102,
                nome: "Pizza Calabresa",
                descricao: "Deliciosa pizza preparada com generosas fatias de calabresa levemente defumada, coberta com molho artesanal de tomate, queijo muçarela derretido e finalizada com cebola em rodelas e orégano.",
                foto: pizzaMarguerita,
                preco: 39.9,
                porcao: "2 pessoas"
            },
            {
                id: 103,
                nome: "Pizza Camarão com Catupiry",
                descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
                foto: pizzaMarguerita,
                preco: 39.9,
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
                preco: 89.9,
                porcao: "1 pessoa"
            },
            {
                id: 202,
                nome: "Spaghetti Pomodoro",
                descricao: "Massa ao dente servida com molho de tomates frescos, azeite e manjericão.",
                foto: spaghettiPomodoro,
                preco: 59.9,
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
                porcao: "1 pessoa"
            },
            // {
            //     id: 302,
            //     nome: "Spaghetti Pomodoro",
            //     descricao: "Massa ao dente servida com molho de tomates frescos, azeite e manjericão.",
            //     foto: spaghettiPomodoro,
            //     preco: 59.9,
            //     porcao: "1 pessoa"
            // }
        ]
    }
];

export default restaurantesDetalhes;
