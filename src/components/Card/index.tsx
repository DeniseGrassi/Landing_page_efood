import { useMemo, useState } from "react";
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
  AvaliacaoTexto
} from "./styles";

import Tag from "../Tags";

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
  id
}: Props) => {
  const [expanded, setExpanded] = useState(false);

  const hasLong = descricao.length > 200;
  const texto = expanded
    ? descricao
    : hasLong
    ? `${descricao.slice(0, 200)}...`
    : descricao;


  const notaFmt = useMemo(() => {
    const n = Number(String(nota).replace(",", "."));
    return Number.isFinite(n) ? n.toFixed(1) : nota;
  }, [nota]);

  return (
    <CardContainer>
      <CardUnit>
        <div style={{ position: "relative" }}>
          <CardImg
            src={imagem}
            alt={`Foto do restaurante ${titulo}`}
            loading="lazy"
            decoding="async"
          />

          {!!infos?.length && (
            <Infos aria-label="Categorias do restaurante">
              {infos.map((info, idx) => (
                <Tag
                  key={`${info}-${idx}`}
                  size={info.length <= 10 ? "pequeno" : "grande"}
                >
                  {info}
                </Tag>
              ))}
            </Infos>
          )}
        </div>

        <InfoContainer>
          <CardTitulo>{titulo}</CardTitulo>

          <AvaliacaoContainer>
            <Avaliacao>
              <AvaliacaoTexto>{notaFmt}</AvaliacaoTexto>
              <img
                src={imageEstrela}
                alt="estrela de avaliação"
                width={16}
                height={16}
              />
            </Avaliacao>
          </AvaliacaoContainer>
        </InfoContainer>

        <CardDescricao>
          {texto}
          {hasLong && (
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((v) => !v)}
              style={{
                background: "none",
                border: "none",
                color: "#E66767",
                cursor: "pointer",
                padding: 0,
                marginLeft: 5,
                fontWeight: "bold"
              }}
            >
              {expanded ? "Ler menos" : "Ler mais"}
            </button>
          )}
        </CardDescricao>

        <CardBotao>
          <BotaoLink to={`/Perfil/${id}`} aria-label={`Ver perfil de ${titulo}`}>
            Saiba mais
          </BotaoLink>
        </CardBotao>
      </CardUnit>
    </CardContainer>
  );
};

export default Card;
