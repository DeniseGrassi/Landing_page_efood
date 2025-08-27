import { useState } from "react";
import Header from "../../components/Header";
import ListaRestaurantes from "../../components/ListaRestaurantes";
import { Carregando } from "../../components/PerfilRest/styles";
import Restaurante from "../../models/Restaurante";
import estrela from "../../assets/estrelaNota.png";
import pizzaImg from "../../assets/pizza.png"; 
import LaDolceImg from "../../assets/LaDolce.png"; 
import SushiImg from "../../assets/hioki_sushi.png"
import CarneImg from "../../assets/carne.png";

const Home = () => {
  const [restaurantes] = useState<Restaurante[]>([
    new Restaurante(
      1,
      pizzaImg, 
      "Pizzaria Sabor da Lenha",
      "4.7",
      estrela,
      ["Italiana"],
      "Pizzas no forno a lenha."
    ),
    new Restaurante(
      2,
      LaDolceImg,
      "La Dolce Vitta Trattoria",
      "4.5",
      estrela,
      ["Italiano"],
      "Massas artesanais."
    ),
        new Restaurante(
      3,
      SushiImg, 
      "Sushi Deli",
      "4.7",
      estrela,
      ["Japonesa"],
      "Comida japonesa de excelência!!"
    ),
    new Restaurante(
      4,
      CarneImg,
      "Boi na Brasa",
      "4.5",
      estrela,
      ["Italiano"],
      "Carnes nobres assadas."
    )

  ]);

  return (
    <>
      <Header />
      {restaurantes.length > 0 ? (
        <ListaRestaurantes restaurante={restaurantes} />
      ) : (
        <Carregando>
          <p>Nenhum restaurante encontrado.</p>
          <div className="c-loader" />
        </Carregando>
      )}
    </>
  );
};

export default Home;
