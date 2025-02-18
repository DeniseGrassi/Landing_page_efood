import { Link, useParams } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Fechar from '../../assets/fechar.png';
import IrParaHome from '../../assets/irParaHome.png';

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
    LogoPerfil,
    ModalBackdrop,
    ModalContent,
    NavContainer,
    NomeRestaurante,
    PerfilRestaurante,
    Voltar,
} from './styles';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { adicionarProduto } from '../../store';

const Perfil: React.FC = () => {
    const { id } = useParams();
    const [restaurante, setRestaurante] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pratoSelecionado, setPratoSelecionado] = useState<any>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchRestaurante = async () => {
            try {
                const response = await axios.get(
                    `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`,
                );
                setRestaurante(response.data);
            } catch (error) {
                console.error('Erro ao buscar o restaurante:', error);
            }
        };

        if (id) fetchRestaurante();
    }, [id]);

    const handleOpenModal = (prato: any) => {
        console.log('Abrindo modal para:', prato);
        setPratoSelecionado(prato);
        setIsModalOpen(true);
    };
    const truncateDescription = (descricao: string, maxLength: number) => {
        if (descricao.length > maxLength) {
            return descricao.slice(0, maxLength) + '...';
        }
        return descricao;
    };
    const handleAddToCart = (prato: any) => {
        dispatch(
            adicionarProduto({
                id: prato.id,
                nome: prato.nome,
                preco: prato.preco,
                foto: prato.foto,
            }),
        );
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
                <CartInfo>
                    <span> 0 </span> produto(s) no carrinho
                </CartInfo>
            </HeaderPerfil>

            <Hero style={{ backgroundImage: `url(${restaurante.capa})` }}>
                <Container>
                    <PerfilRestaurante>{restaurante.tipo}</PerfilRestaurante>
                    <NomeRestaurante>{restaurante.titulo}</NomeRestaurante>
                </Container>
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
                                        {truncateDescription(
                                            item.descricao,
                                            140,
                                        )}
                                    </CardDescription>

                                    <AbrirModal
                                        onClick={() => handleOpenModal(item)}
                                    >
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
                        if (e.target === e.currentTarget) {
                            setIsModalOpen(false);
                        }
                    }}
                >
                    <ModalContent>
                        <img
                            src={Fechar}
                            alt="Fechar"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <img
                            src={pratoSelecionado.foto}
                            alt={pratoSelecionado.nome}
                        />
                        <div>
                            <h3>{pratoSelecionado.nome}</h3>
                            <p>{pratoSelecionado.descricao}</p>
                            <p>Serve: {pratoSelecionado.porcao}</p>
                            <AddButton
                                onClick={() =>
                                    handleAddToCart(pratoSelecionado)
                                }
                            >
                                Adicionar ao carrinho - R${' '}
                                {pratoSelecionado.preco.toFixed(2)}
                            </AddButton>
                        </div>
                    </ModalContent>
                </ModalBackdrop>
            )}
        </div>
    );
};

<footer></footer>;

export default Perfil;
