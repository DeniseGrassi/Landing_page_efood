
export type CardapioItem = {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: string  
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}
