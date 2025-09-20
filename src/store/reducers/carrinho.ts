import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ItemCarrinho = {
  id: number
  restauranteId: number
  nome: string
  foto: string
  preco: number
  porcao: string
  quantidade: number
}

type Estado = { itens: ItemCarrinho[] }
const estadoInicial: Estado = { itens: [] }

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState: estadoInicial,
  reducers: {
    adicionarItem: (state, action: PayloadAction<ItemCarrinho>) => {
      const existente = state.itens.find((i) => i.id === action.payload.id)
      if (existente) existente.quantidade += action.payload.quantidade
      else state.itens.push(action.payload)
    },
    removerItem: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((i) => i.id !== action.payload)
    },
    alterarQuantidade: (
      state,
      action: PayloadAction<{ id: number; quantidade: number }>
    ) => {
      const it = state.itens.find((i) => i.id === action.payload.id)
      if (it) it.quantidade = Math.max(1, action.payload.quantidade)
    },
    limpar: (state) => {
      state.itens = []
    }
  }
})

export const { adicionarItem, removerItem, alterarQuantidade, limpar } =
  carrinhoSlice.actions
export default carrinhoSlice.reducer

export const selecionarTotal = (state: any) =>
  (state.carrinho?.itens ?? []).reduce(
    (acc: number, i: ItemCarrinho) => acc + i.preco * i.quantidade,
    0
  )
