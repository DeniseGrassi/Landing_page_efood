// src/models/restaurantesDetalhes.ts
import pizzaPerfil from "../assets/imgperfil.png"
import pizzaMarguerita from "../assets/pizza.png"

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
            {
                id: 104,
                nome: "Pizza de Frango com Catupiry",
                descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
                foto: pizzaMarguerita,
                preco: 39.9,
                porcao: "2 pessoas"
            },
            {
                id: 105,
                nome: "Pizza de Carne Seca com Banana da Terra",
                descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
                foto: pizzaMarguerita,
                preco: 39.9,
                porcao: "2 pessoas"
            },
            {
                id: 106,
                nome: "Pizza de Atum",
                descricao: "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
                foto: pizzaMarguerita,
                preco: 39.9,
                porcao: "2 pessoas"
            },

        ]
    },
    {
        id: 2,
        capa: "https://picsum.photos/seed/burger-hero/1200/400",
        tipo: "Hamburgueria",
        titulo: "Burger House",
        cardapio: [
            {
                id: 201,
                nome: "Smash Burger",
                descricao: "Dois discos smash, queijo, picles e molho da casa.",
                foto: "https://picsum.photos/seed/burger1/400/240",
                preco: 29.9,
                porcao: "1 pessoa"
            },
            {
                id: 202,
                nome: "Cheddar Bacon",
                descricao: "Blend 160g, cheddar cremoso, bacon crocante.",
                foto: "https://picsum.photos/seed/burger2/400/240",
                preco: 34.9,
                porcao: "1 pessoa"
            }
        ]
    }
];

export default restaurantesDetalhes;
