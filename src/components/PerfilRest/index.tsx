import { Link, useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import Fechar from "../../assets/fechar.png";
import IrParaHome from "../../assets/irParaHome.png";
import Footer from '../Footer'
import { toggleCarrinho, abrirCarrinho } from '../../store/reducers/ui'


import {
  AbrirModal,
  AddButton,
  Card,
  CardContent,
  CardDescription,
  CardImage,
  CardImageWrap,
  CardsGrid,
  CardTitle,
  CartInfo,
  Container,
  ContainerVoltar,
  HeaderPerfil,
  Hero,
  HeroInner,
  LogoPerfil,
  ModalBackdrop,
  ModalContent,
  NavContainer,
  NomeRestaurante,
  PerfilRestaurante,
  Voltar, 
  PratoImagem,
  FecharModal
} from "./styles";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { adicionarItem } from "../../store/reducers/carrinho";
import { useGetRestauranteByIdQuery } from "../../services/efoodApi";

const Perfil: React.FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.carrinho.itens);

  const { data: restaurante, isLoading, isError } = useGetRestauranteByIdQuery(id!);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pratoSelecionado, setPratoSelecionado] = useState<any>(null);

  const handleOpenModal = (prato: any) => {
    setPratoSelecionado(prato);
    setIsModalOpen(true);
  };

  const truncateDescription = (descricao: string, maxLength: number) =>
    descricao.length > maxLength ? descricao.slice(0, maxLength) + "..." : descricao;

  const handleAddToCart = (prato: any) => {
    dispatch(
      adicionarItem({
        id: prato.id,
        restauranteId: Number(id),
        nome: prato.nome,
        preco: Number(prato.preco),
        foto: prato.foto,
        porcao: prato.porcao,
        quantidade: 1
      })
    );
    setIsModalOpen(false)
    dispatch(abrirCarrinho())
  };

  if (isLoading) return <p>Carregando perfil...</p>;
  if (isError || !restaurante) return <p>Erro ao carregar restaurante.</p>;

  return (
    <div>
      <HeaderPerfil>
        <NavContainer>
          <ContainerVoltar>
            <Link to="/">
              <Voltar src={IrParaHome} alt="" />
              Restaurantes
            </Link>
          </ContainerVoltar>
        </NavContainer>
        <LogoPerfil src={logo} alt="Logo Efood" />
        <CartInfo onClick={() => dispatch(toggleCarrinho())}>
          <span>{items.length} </span>produto(s) no carrinho
        </CartInfo>
      </HeaderPerfil>

      <Hero style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <HeroInner>
          <PerfilRestaurante>{restaurante.tipo}</PerfilRestaurante>
          <NomeRestaurante>{restaurante.titulo}</NomeRestaurante>
        </HeroInner>
      </Hero>

      <section>
        <Container>
          <CardsGrid>
            {restaurante.cardapio.map((item: any) => (
              <Card key={item.id}>
                <CardImageWrap>
                  <CardImage src={item.foto} alt={item.nome} />
                </CardImageWrap>
                <CardContent>
                  <CardTitle>{item.nome}</CardTitle>
                  <CardDescription>
                    {truncateDescription(item.descricao, 140)}
                  </CardDescription>
                  <AbrirModal onClick={() => handleOpenModal(item)}>
                    Adicionar ao carrinho
                  </AbrirModal>
                </CardContent>
              </Card>
            ))}
          </CardsGrid>
        </Container>
      </section>

      {isModalOpen && pratoSelecionado && (
        <ModalBackdrop
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
        >
          <ModalContent>
            <FecharModal src={Fechar} alt="Fechar" onClick={() => setIsModalOpen(false)} />
            <PratoImagem src={pratoSelecionado.foto} alt={pratoSelecionado.nome} />
            <div>
              <h3>{pratoSelecionado.nome}</h3>
              <p>{pratoSelecionado.descricao}</p>
              <p>Serve: {pratoSelecionado.porcao}</p>
              <AddButton onClick={() => handleAddToCart(pratoSelecionado)}>
                Adicionar ao carrinho - R$ {Number(pratoSelecionado.preco).toFixed(2)}
              </AddButton>
            </div>
          </ModalContent>
        </ModalBackdrop>
      )}
      <Footer />
    </div>

  );
};

export default Perfil;
