import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Produto {
    id: number;
    nome: string;
    preco: number;
    foto: string;
}

interface CarrinhoState {
    produtos: Produto[];
    total: number;
}

const initialState: CarrinhoState = {
    produtos: [],
    total: 0,
};

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        adicionarProduto: (state, action: PayloadAction<Produto>) => {
            state.produtos.push(action.payload);
            state.total += action.payload.preco;
        },
        removerProduto: (state, action: PayloadAction<number>) => {
            const produtoIndex = state.produtos.findIndex(
                (produto) => produto.id === action.payload,
            );
            if (produtoIndex !== -1) {
                const produto = state.produtos[produtoIndex];
                state.produtos.splice(produtoIndex, 1);
                state.total -= produto.preco;
            }
        },
    },
});

export const { adicionarProduto, removerProduto } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
