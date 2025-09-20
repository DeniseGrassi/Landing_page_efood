import { useGetRestaurantesQuery } from '../../services/efoodApi'
import Card from '../Card'
import * as S from './styles'
import estrela from '../../assets/estrelaNota.png'

export default function ListaRestaurantes() {
  const { data, isLoading, isError } = useGetRestaurantesQuery()

  if (isLoading) return <p>Carregando…</p>
  if (isError || !data) return <p>Erro ao carregar restaurantes.</p>

  return (
    <S.CardContainer>
      <S.Lista>
        {data.map((r) => (
          <li key={r.id}>
            <Card
              id={r.id}
              titulo={r.titulo}
              descricao={r.descricao}
              nota={String(r.avaliacao)}
              imagem={r.capa}
              imageEstrela={estrela}
              infos={[r.tipo]} />
          </li>
        ))}
      </S.Lista>
    </S.CardContainer>
  )
}
