import {
    CardContainer,
    CardUnit,
    CardImg,
    CardBotao,
    CardDescricao,
    CardTitulo,
    Infos,
    InfoContainer,
    AvaliacaoContainer,
    Avaliacao,
    BotaoLink,
    AvaliacaoTexto,
} from './styles';


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
        <CardUnit>
            <CardImg src={imagem} alt="Imagem do restaurante" />
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
            <CardBotao>
                {' '}
                <BotaoLink to="/Perfil">Saiba mais</BotaoLink>
            </CardBotao>
        </CardUnit>
    </CardContainer>
);

export default Card;
