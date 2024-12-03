import {
    CardContainer,
    CardUnt,
    CardImg,
    CardBotao,
    CardDescricao,
    CardTitulo,
    Infos,
} from './styles';

import HiokiSushi from '../../assets/hioki_sushi.png';
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
    id,
    descricao,
    nota,
    titulo,
    imagem,
    infos,
    imageEstrela,
}: Props) => (
    <CardContainer>
        <CardUnt>
            <CardImg src={imagem} alt="foto do Hioki Sushi" />
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
            <CardDescricao>
                {' '}
                Peça já o melhor da culinária japonesa no conforto da sua casa!
                Sushis frescos, sashimis deliciosos e pratos quentes
                irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
                garantida.Experimente o Japão sem sair do lar com nosso
                delivery!
            </CardDescricao>
            <CardBotao> Saiba Mais </CardBotao>
        </CardUnt>
        <CardUnt>
            <CardImg src={HiokiSushi} alt="foto do Hioki Sushi" />
            <CardTitulo>Hioki Sushi</CardTitulo>
            <CardDescricao>
                {' '}
                Peça já o melhor da culinária japonesa no conforto da sua casa!
                Sushis frescos, sashimis deliciosos e pratos quentes
                irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
                garantida.Experimente o Japão sem sair do lar com nosso
                delivery!
            </CardDescricao>
            <CardBotao> Saiba Mais </CardBotao>
        </CardUnt>
        <CardUnt>
            <CardImg src={HiokiSushi} alt="foto do Hioki Sushi" />
            <CardTitulo>Hioki Sushi</CardTitulo>
            <CardDescricao>
                {' '}
                Peça já o melhor da culinária japonesa no conforto da sua casa!
                Sushis frescos, sashimis deliciosos e pratos quentes
                irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
                garantida.Experimente o Japão sem sair do lar com nosso
                delivery!
            </CardDescricao>
            <CardBotao> Saiba Mais </CardBotao>
        </CardUnt>
        <CardUnt>
            <CardImg src={HiokiSushi} alt="foto do Hioki Sushi" />
            <CardTitulo>Hioki Sushi</CardTitulo>
            <CardDescricao>
                {' '}
                Peça já o melhor da culinária japonesa no conforto da sua casa!
                Sushis frescos, sashimis deliciosos e pratos quentes
                irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade
                garantida.Experimente o Japão sem sair do lar com nosso
                delivery!
            </CardDescricao>
            <CardBotao> Saiba Mais </CardBotao>
        </CardUnt>
    </CardContainer>
);

export default Card;
