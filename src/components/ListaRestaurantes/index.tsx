import Card from '../Card';
import { CardContainer } from '../Card/styles';
import Restaurante from '../../models/Restaurante';
import { Lista } from './styles';

export type Props = {
    restaurante: Restaurante[];
};
const ListaRestaurantes = ({ restaurante }: Props) => (
    <CardContainer>
        <section>
            <Lista>
                {restaurante.map((restaurante) => (
                    <Card
                        key={restaurante.id}
                        imagem={restaurante.imagem}
                        titulo={restaurante.titulo}
                        nota={restaurante.nota}
                        imageEstrela={restaurante.imageEstrela}
                        descricao={restaurante.descricao}
                        infos={restaurante.infos}
                        id={restaurante.id}
                    />
                ))}
            </Lista>
        </section>
    </CardContainer>
);
export default ListaRestaurantes;
