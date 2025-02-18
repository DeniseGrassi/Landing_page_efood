import ListaRestaurantes from '../../../src/components/ListaRestaurantes';
import estrela from '../../assets/estrelaNota.png';

import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Restaurante from '../../models/Restaurante';
import { Carregando } from '../../components/PerfilRest/styles';

const Home = () => {
    const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

    useEffect(() => {
        const fetchRestaurantes = async () => {
            try {
                const response = await axios.get(
                    'https://fake-api-tau.vercel.app/api/efood/restaurantes',
                );

                setRestaurantes(
                    response.data.map((item: any) => ({
                        id: item.id,
                        imagem: item.capa,
                        infos: item.tipo ? [item.tipo] : [],
                        titulo: item.titulo,
                        nota: item.avaliacao.toString(),
                        imageEstrela: estrela,
                        descricao: item.descricao,
                    })),
                );
            } catch (error) {
                console.error('Erro ao buscar os restaurantes:', error);
            }
        };

        fetchRestaurantes();
    }, []);
    return (
        <>
            <Header />
            {restaurantes.length > 0 ? (
                <ListaRestaurantes restaurante={restaurantes} />
            ) : (
                <Carregando>
                    <p>Carregando Restaurantes ...</p>
                    <div className="c-loader"></div>
                </Carregando>
            )}
        </>
    );
};

export default Home;
