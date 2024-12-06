import {
    CardContainer,
    CardUnt,
    CardImg,
    CardBotao,
    CardDescricao,
    CardTitulo,
    Infos,
    InfoContainer,
    AvaliacaoContainer,
    Avaliacao,
    AvaliacaoTexto,
} from './styles';

// import imageEstrela from '../../assets/estrelaNota.png'
import Tag from '../Tags';

type Props = {
    id: number;
    titulo: string;
    descricao: string;
    nota: string;
    imagem: string;
    imageEstrela: string;
    infos: string[];
};

const Card = ({
    descricao,
    nota,
    titulo,
    imagem,
    infos,
    imageEstrela,
}: Props) => (
    <CardContainer>
        <CardUnt>
            <CardImg src={imagem} alt="Imagem do restaurante" />
            <CardTitulo>{titulo}</CardTitulo>
            <Infos>
                {infos.map((info) => (
                    <Tag
                        key={info}
                        size={info === 'italiana' ? 'pequeno' : 'grande'}
                    >
                        {info}
                    </Tag>
                ))}
            </Infos>
            <InfoContainer>
                <CardTitulo>{titulo}</CardTitulo>
                <AvaliacaoContainer>
                    <Avaliacao>
                        <AvaliacaoTexto>{nota}</AvaliacaoTexto>
                        <li>
                            <img src={imageEstrela} alt="estrela" />
                        </li>
                    </Avaliacao>
                </AvaliacaoContainer>
            </InfoContainer>
            <CardDescricao>{descricao}</CardDescricao>
            <CardBotao> Saiba Mais </CardBotao>
        </CardUnt>
    </CardContainer>
);

export default Card;
