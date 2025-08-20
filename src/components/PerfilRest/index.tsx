import { Link, useParams } from "react-router-dom";
import logo from "../../assets/logo.png";
import Fechar from "../../assets/fechar.png";
import IrParaHome from "../../assets/irParaHome.png";

import {
    AbrirModal,
    AddButton,
    Card,
    CardContent,
    CardDescription,
    CardImage,
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
    Voltar
} from "./styles";

import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adicionarProduto, toggleCarrinho } from "../../store";

import restaurantesDetalhes from "../../models/restaurantesDetalhes";

const Perfil: React.FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { items } = useSelector((state: any) => state.carrinho);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pratoSelecionado, setPratoSelecionado] = useState<any>(null);

    // Busca local pelo restaurante
    const restaurante = useMemo(() => {
        if (!id) return null;
        return restaurantesDetalhes.find((r) => String(r.id) === String(id)) || null;
    }, [id]);

    const handleOpenModal = (prato: any) => {
        setPratoSelecionado(prato);
        setIsModalOpen(true);
    };

    const truncateDescription = (descricao: string, maxLength: number) => {
        return descricao.length > maxLength ? descricao.slice(0, maxLength) + "..." : descricao;
    };

    const handleAddToCart = (prato: any) => {
        dispatch(
            adicionarProduto({
                id: prato.id,
                nome: prato.nome,
                preco: prato.preco,
                foto: prato.foto
            })
        );
        dispatch(toggleCarrinho());
        setIsModalOpen(false);
    };

    if (!restaurante) {
        return <p>Carregando perfil...</p>;
    }

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
                                <CardImage src={item.foto} alt={item.nome} />
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
                        <img src={Fechar} alt="Fechar" onClick={() => setIsModalOpen(false)} />
                        <img src={pratoSelecionado.foto} alt={pratoSelecionado.nome} />
                        <div>
                            <h3>{pratoSelecionado.nome}</h3>
                            <p>{pratoSelecionado.descricao}</p>
                            <p>Serve: {pratoSelecionado.porcao}</p>
                            <AddButton onClick={() => handleAddToCart(pratoSelecionado)}>
                                Adicionar ao carrinho - R$ {pratoSelecionado.preco.toFixed(2)}
                            </AddButton>
                        </div>
                    </ModalContent>
                </ModalBackdrop>
            )}
        </div>
    );
};

export default Perfil;





