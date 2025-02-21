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
import { useState } from 'react';

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
    id,
}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const truncateDescription = (descricao: string, maxLength: number) => {
        if (descricao.length > maxLength) {
            return descricao.slice(0, maxLength) + '...';
        }
        return descricao;
    };

    return (
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
                <CardDescricao>
                    {' '}
                    {isExpanded
                        ? descricao
                        : truncateDescription(descricao, 200)}
                    {!isExpanded && descricao.length > 200 && (
                        <button
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#E66767',
                                cursor: 'pointer',
                                padding: 0,
                                marginLeft: 5,
                                fontWeight: 'bold',
                            }}
                            onClick={() => setIsExpanded(true)}
                        >
                            Ler mais
                        </button>
                    )}
                </CardDescricao>
                <CardBotao>
                    <BotaoLink to={`/Perfil/${id}`}>Saiba mais</BotaoLink>
                </CardBotao>
            </CardUnit>
        </CardContainer>
    );
};

export default Card;
