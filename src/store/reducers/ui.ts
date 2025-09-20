import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Etapa = 'carrinho' | 'entrega' | 'pagamento' | 'confirmacao'

type UIState = {
  carrinhoAberto: boolean
  etapa: Etapa
}

const initialState: UIState = { carrinhoAberto: false, etapa: 'carrinho' }

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleCarrinho: (s) => { s.carrinhoAberto = !s.carrinhoAberto },
    abrirCarrinho:  (s) => { s.carrinhoAberto = true; s.etapa = 'carrinho' },
    fecharCarrinho: (s) => { s.carrinhoAberto = false; s.etapa = 'carrinho' },
    setEtapa: (s, a: PayloadAction<Etapa>) => { s.etapa = a.payload }
  }
})

export const { toggleCarrinho, abrirCarrinho, fecharCarrinho, setEtapa } = uiSlice.actions
export default uiSlice.reducer
