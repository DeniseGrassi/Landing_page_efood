// src/components/Carrinho/index.tsx
import React, { useState, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { RootState } from '../../store'
import {
  alterarQuantidade,
  removerItem,
  selecionarTotal,
  limpar
} from '../../store/reducers/carrinho'
import { fecharCarrinho, setEtapa } from '../../store/reducers/ui'
import { useCheckoutMutation } from '../../services/efoodApi'

import * as S from './styles'
import Fechar from '../../assets/fechar.png'

type EntregaForm = {
  nome: string
  endereco: string
  cidade: string
  cep: string
  numero: string
  complemento?: string
}

type PagamentoForm = {
  nomeCartao: string
  numeroCartao: string
  cvv: string
  mes: string
  ano: string
}

const Carrinho: React.FC = () => {
  const itens   = useSelector((s: RootState) => s.carrinho.itens)
  const total   = useSelector(selecionarTotal)
  const aberto  = useSelector((s: RootState) => s.ui.carrinhoAberto)
  const etapa   = useSelector((s: RootState) => s.ui.etapa)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [checkout, { isLoading: postando }] = useCheckoutMutation()

  const [entrega, setEntrega] = useState<EntregaForm>({
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: ''
  })

  const [pagamento, setPagamento] = useState<PagamentoForm>({
    nomeCartao: '',
    numeroCartao: '',
    cvv: '',
    mes: '',
    ano: ''
  })

  const [pedidoId, setPedidoId] = useState<string>('')

  if (!aberto) return null

  // -------- Handlers tipados --------
  const onEntrega =
    (field: keyof EntregaForm) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setEntrega((prev) => ({ ...prev, [field]: e.target.value }))

  const onPagamento =
    (field: keyof PagamentoForm) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setPagamento((prev) => ({ ...prev, [field]: e.target.value }))

  // -------- Validações --------
  const podeContinuarCarrinho = itens.length > 0

  const entregaOk = () => {
    const cepOk = /^\d{5}-?\d{3}$/.test(entrega.cep)
    return (
      entrega.nome.trim() &&
      entrega.endereco.trim() &&
      entrega.cidade.trim() &&
      entrega.numero.trim() &&
      cepOk
    )
  }

  const pagamentoOk = () => {
    const numero = pagamento.numeroCartao.trim()
    const cvv    = pagamento.cvv.trim()
    const mes    = pagamento.mes.trim()
    const ano    = pagamento.ano.trim()

    const numOk = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(numero) // 0000 0000 0000 0000
    const cvvOk = /^\d{3,4}$/.test(cvv)                       // 3 ou 4 dígitos
    const mesOk = /^(0[1-9]|1[0-2])$/.test(mes)               // 01–12
    const anoOk = /^(\d{2}|\d{4})$/.test(ano)                 // 2 OU 4 dígitos
    const nomeOk = pagamento.nomeCartao.trim().length > 2

    return nomeOk && numOk && cvvOk && mesOk && anoOk
  }

  // -------- POST /checkout --------
  const finalizarPedido = async () => {
    const payload = {
      products: itens.map((i) => ({ id: i.id, price: i.preco })), // usa dados da API
      delivery: {
        receiver: entrega.nome,
        address: entrega.endereco,
        city: entrega.cidade,
        zipCode: entrega.cep,
        number: Number(entrega.numero),
        complement: entrega.complemento || ''
      },
      payment: {
        card: {
          name: pagamento.nomeCartao,
          number: pagamento.numeroCartao, // já mascarado
          code: Number(pagamento.cvv),
          expires: {
            month: Number(pagamento.mes),
            year: Number(pagamento.ano)
          }
        }
      }
    }

    try {
      const res = await checkout(payload).unwrap()
      // a API retorna { orderId: string }
      setPedidoId(`#${res.orderId}`)
      dispatch(setEtapa('confirmacao'))
      dispatch(limpar()) // opcional: já limpa o carrinho ao confirmar
    } catch {
      alert('Não foi possível finalizar o pedido. Tente novamente.')
    }
  }

  return (
    <>
      <S.Overlay onClick={() => dispatch(fecharCarrinho())} />

      <S.CarrinhoContainer role="dialog" aria-modal="true" aria-label="Carrinho">
        <S.BarraLateral>
          {/* Título por etapa */}
          <h3 style={{ color: '#FFEBD9', margin: 0 }}>
            {etapa === 'carrinho'    && 'Seu carrinho'}
            {etapa === 'entrega'     && 'Entrega'}
            {etapa === 'pagamento'   && 'Pagamento'}
            {etapa === 'confirmacao' && 'Confirmação'}
          </h3>

          {/* ====== CARRINHO ====== */}
          {etapa === 'carrinho' && (
            <>
              <S.ProdutoLista>
                {itens.length === 0 ? (
                  <S.Vazio>Seu carrinho está vazio</S.Vazio>
                ) : (
                  itens.map((i) => (
                    <S.ProdutoItem key={i.id}>
                      <S.ProdutoImagem src={i.foto} alt={i.nome} />
                      <S.ProdutoInfo>
                        <S.ProdutoNome>{i.nome}</S.ProdutoNome>
                        <small>{i.porcao}</small>

                        <div style={{ marginTop: 8, display: 'flex', alignItems: 'center' }}>
                          <button
                            onClick={() =>
                              dispatch(alterarQuantidade({ id: i.id, quantidade: i.quantidade - 1 }))
                            }
                            aria-label="Diminuir quantidade"
                            style={{ width: 24, height: 24, border: 'none', cursor: 'pointer' }}
                          >
                            −
                          </button>
                          <span style={{ margin: '0 8px', minWidth: 16, textAlign: 'center' }}>
                            {i.quantidade}
                          </span>
                          <button
                            onClick={() =>
                              dispatch(alterarQuantidade({ id: i.id, quantidade: i.quantidade + 1 }))
                            }
                            aria-label="Aumentar quantidade"
                            style={{ width: 24, height: 24, border: 'none', cursor: 'pointer' }}
                          >
                            +
                          </button>
                        </div>
                      </S.ProdutoInfo>

                      <div style={{ textAlign: 'right' }}>
                        <S.ProdutoPreco>
                          R$ {(i.preco * i.quantidade).toFixed(2)}
                        </S.ProdutoPreco>
                        <S.IconeLixeira
                          src={Fechar}
                          alt="Remover item"
                          onClick={() => dispatch(removerItem(i.id))}
                          style={{ cursor: 'pointer' }}
                        />
                      </div>
                    </S.ProdutoItem>
                  ))
                )}
              </S.ProdutoLista>

              <S.Total>
                <span>Valor total</span>
                <strong>R$ {total.toFixed(2)}</strong>
              </S.Total>

              <S.BotaoContinuar
                disabled={!podeContinuarCarrinho}
                onClick={() => dispatch(setEtapa('entrega'))}
              >
                Continuar com a entrega
              </S.BotaoContinuar>

              <S.BotaoSecundario onClick={() => dispatch(fecharCarrinho())}>
                Fechar
              </S.BotaoSecundario>
            </>
          )}

          {/* ====== ENTREGA ====== */}
          {etapa === 'entrega' && (
            <>
              <S.SecaoTitulo>Endereço de entrega</S.SecaoTitulo>

              <S.Campo>
                <S.Label>Quem irá receber</S.Label>
                <S.Input value={entrega.nome} onChange={onEntrega('nome')} />
              </S.Campo>

              <S.Campo>
                <S.Label>Endereço</S.Label>
                <S.Input value={entrega.endereco} onChange={onEntrega('endereco')} />
              </S.Campo>

              <S.Linha>
                <S.Campo style={{ flex: 1 }}>
                  <S.Label>Cidade</S.Label>
                  <S.Input value={entrega.cidade} onChange={onEntrega('cidade')} />
                </S.Campo>

                <S.Campo style={{ width: 120 }}>
                  <S.Label>CEP</S.Label>
                  <S.InputMascara
                    mask="99999-999"
                    value={entrega.cep}
                    onChange={onEntrega('cep')}
                  />
                </S.Campo>
              </S.Linha>

              <S.Linha>
                <S.Campo style={{ width: 120 }}>
                  <S.Label>Número</S.Label>
                  <S.Input value={entrega.numero} onChange={onEntrega('numero')} />
                </S.Campo>

                <S.Campo style={{ flex: 1 }}>
                  <S.Label>Complemento (opcional)</S.Label>
                  <S.Input
                    value={entrega.complemento}
                    onChange={onEntrega('complemento')}
                  />
                </S.Campo>
              </S.Linha>

              <S.BotoesLinha>
                <S.BotaoSecundario onClick={() => dispatch(setEtapa('carrinho'))}>
                  Voltar
                </S.BotaoSecundario>
                <S.BotaoContinuar
                  disabled={!entregaOk()}
                  onClick={() => dispatch(setEtapa('pagamento'))}
                >
                  Continuar para pagamento
                </S.BotaoContinuar>
              </S.BotoesLinha>
            </>
          )}

          {/* ====== PAGAMENTO ====== */}
          {etapa === 'pagamento' && (
            <>
              <S.SecaoTitulo>Pagamento • Entrega em até 30–60 min</S.SecaoTitulo>

              <S.Campo>
                <S.Label>Nome no cartão</S.Label>
                <S.Input
                  value={pagamento.nomeCartao}
                  onChange={onPagamento('nomeCartao')}
                />
              </S.Campo>

              <S.Campo>
                <S.Label>Número do cartão</S.Label>
                <S.InputMascara
                  mask="9999 9999 9999 9999"
                  value={pagamento.numeroCartao}
                  onChange={onPagamento('numeroCartao')}
                />
              </S.Campo>

              <S.Linha>
                <S.Campo>
                  <S.Label>Mês</S.Label>
                  <S.Input
                    placeholder="MM"
                    value={pagamento.mes}
                    onChange={onPagamento('mes')}
                  />
                </S.Campo>

                <S.Campo>
                  <S.Label>Ano</S.Label>
                  <S.Input
                    placeholder="AA ou AAAA"
                    value={pagamento.ano}
                    onChange={onPagamento('ano')}
                  />
                </S.Campo>

                <S.Campo>
                  <S.Label>CVV</S.Label>
                  <S.InputMascara
                    mask="9999"
                    value={pagamento.cvv}
                    onChange={onPagamento('cvv')}
                  />
                </S.Campo>
              </S.Linha>

              <S.Total>
                <span>Valor total</span>
                <strong>R$ {total.toFixed(2)}</strong>
              </S.Total>

              <S.BotoesLinha>
                <S.BotaoSecundario onClick={() => dispatch(setEtapa('entrega'))}>
                  Voltar
                </S.BotaoSecundario>

                <S.BotaoContinuar
                  disabled={!pagamentoOk() || postando}
                  onClick={finalizarPedido}
                >
                  {postando ? 'Enviando…' : 'Finalizar pedido'}
                </S.BotaoContinuar>
              </S.BotoesLinha>
            </>
          )}

          {/* ====== CONFIRMAÇÃO ====== */}
          {etapa === 'confirmacao' && (
            <>
              <S.Confirmacao>
                <p><strong>Pedido realizado - {pedidoId || '{ORDER_ID}'}</strong></p>
                <p>
                  Estamos felizes em informar que seu pedido já está
                  em processo de preparação e, em breve, será entregue
                  no endereço fornecido.
                </p>
                <p>Nossos entregadores não estão autorizados a realizar cobranças extras.</p>
                <p>
                  Lembre-se de higienizar as mãos após o recebimento do pedido
                  para sua segurança.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
              </S.Confirmacao>

              <S.BotaoContinuar
                style={{ marginTop: 12 }}
                onClick={() => {
                  dispatch(fecharCarrinho())
                  navigate('/')
                }}
              >
                Concluir
              </S.BotaoContinuar>
            </>
          )}
        </S.BarraLateral>
      </S.CarrinhoContainer>
    </>
  )
}

export default Carrinho
