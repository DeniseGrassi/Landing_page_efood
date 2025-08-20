import { useState } from "react";
import Header from "../../components/Header";
import ListaRestaurantes from "../../components/ListaRestaurantes";
import { Carregando } from "../../components/PerfilRest/styles";
import Restaurante from "../../models/Restaurante";
import estrela from "../../assets/estrelaNota.png";
import pizzaImg from "../../assets/pizza.png"; 
import LaDolceImg from "../../assets/LaDolce.png"; 

const Home = () => {
  const [restaurantes] = useState<Restaurante[]>([
    new Restaurante(
      1,
      pizzaImg, 
      "Pizzaria Dona Nena",
      "4.7",
      estrela,
      ["Italiana"],
      "Massas artesanais e pizzas no forno a lenha."
    ),
    new Restaurante(
      2,
      LaDolceImg,
      "La Dolce",
      "4.5",
      estrela,
      ["Italiano"],
      "Massas artesanais."
    ),
        new Restaurante(
      3,
      pizzaImg, 
      "Pizzaria Dona Nena",
      "4.7",
      estrela,
      ["Italiana"],
      "Massas artesanais e pizzas no forno a lenha."
    ),
    new Restaurante(
      4,
      LaDolceImg,
      "La Dolce",
      "4.5",
      estrela,
      ["Italiano"],
      "Massas artesanais."
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
