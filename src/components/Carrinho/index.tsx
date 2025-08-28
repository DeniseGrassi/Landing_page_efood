import { useDispatch, useSelector } from 'react-redux';
import { removerProduto, toggleCarrinho } from '../../store';
import { useNavigate } from 'react-router-dom';          
import pizza from '../../assets/pizza.png';
import lixeira from '../../assets/lixeira.png';

import {
  BarraLateral,
  BotaoContinuar,
  CarrinhoContainer,
  ProdutoImagem,
  ProdutoInfo,
  ProdutoItem,
  ProdutoLista,
  ProdutoNome,
  ProdutoPreco,
  Total,
  IconeLixeira,
  Overlay,
} from './styles';

const Carrinho = () => {
  const { items, total, isVisible } = useSelector((state: any) => state.carrinho);
  const dispatch = useDispatch();
  const navigate = useNavigate();                       

  const handleCloseCart = () => {
    dispatch(toggleCarrinho());
  };

  if (!isVisible) return null;

  const handleRemoveProduct = (id: number) => {
    dispatch(removerProduto(id));
  };

  const handleCheckout = () => {                      
    if (!items.length) return;
    dispatch(toggleCarrinho()); // fecha o carrinho
    navigate('/checkout');      // navega para a página de checkout
  };

  return (
    <>
      <Overlay onClick={handleCloseCart} />
      <CarrinhoContainer>
        <BarraLateral onClick={(e) => e.stopPropagation()}>
          <ProdutoLista>
            {items.length === 0 ? (
              <p>O carrinho está vazio!</p>
            ) : (
              items.map((item: any) => (
                <ProdutoItem key={item.id}>
                  <ProdutoImagem src={item.foto || pizza} alt={item.nome} />
                  <ProdutoInfo>
                    <ProdutoNome>{item.nome}</ProdutoNome>
                    <ProdutoPreco>R$ {item.preco.toFixed(2)}</ProdutoPreco>
                  </ProdutoInfo>
                  <IconeLixeira
                    src={lixeira}
                    alt="Remover item"
                    onClick={() => handleRemoveProduct(item.id)}
                  />
                </ProdutoItem>
              ))
            )}
          </ProdutoLista>

          <Total>
            <p>Valor Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </Total>

          <BotaoContinuar
            type="button"
            onClick={handleCheckout}
            disabled={items.length === 0}                 
            aria-disabled={items.length === 0}
          >
            Continuar com a entrega
          </BotaoContinuar>
        </BarraLateral>
      </CarrinhoContainer>
    </>
  );
};

export default Carrinho;
