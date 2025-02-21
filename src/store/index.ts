import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

// Definir a interface para os itens do carrinho
interface Produto {
    id: number;
    nome: string;
    preco: number;
    foto: string;
}

interface CarrinhoState {
    items: Produto[];
    total: number;
    isVisible: boolean;
}

const initialState: CarrinhoState = {
    items: [],
    total: 0,
    isVisible: false,
};

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        // Adiciona um produto ao carrinho
        adicionarProduto(state, action: PayloadAction<Produto>) {
            state.items.push(action.payload);
            state.total += action.payload.preco;
        },
        // Remove um produto do carrinho
        removerProduto(state, action: PayloadAction<number>) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload,
            );
            // Atualizar o total após a remoção
            state.total = state.items.reduce(
                (total, item) => total + item.preco,
                0,
            );
        },
        toggleCarrinho(state) {
            state.isVisible = !state.isVisible;
        },
    },
});

const store = configureStore({
    reducer: {
        carrinho: carrinhoSlice.reducer,
    },
});

export const { adicionarProduto, removerProduto, toggleCarrinho } =
    carrinhoSlice.actions;
export default store;
