// src/Pages/checkout/index.tsx
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CartaoForm from "../../components/CartaoForm";
import { cores } from "../../styles";

const Page = styled.div`
  min-height: calc(100vh - 160px);
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
  max-width: 1200px;
  margin: 24px auto;
  padding: 0 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Conteudo = styled.main`
  background: transparent;
  min-height: 60vh;
`;

const Sidebar = styled.aside`
  background: ${cores.laranjaEscuro};
  color: ${cores.laranjaClaro};
  border: 8px solid ${cores.laranjaEscuro};
  padding: 16px;
  position: sticky;
  top: 16px;
  height: fit-content;

  @media (max-width: 900px) {
    position: static;
  }
`;

const Titulo = styled.h3`
  margin: 0 0 12px;
  font-weight: 900;
`;

const Sub = styled.p`
  margin: 0 0 12px;
  font-size: 12px;
  opacity: 0.85;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
  display: block;
  margin: 10px 0 6px;
`;

const Input = styled.input`
  height: 40px;
  border: 0;
  border-radius: 6px;
  padding: 0 10px;
  width: 100%;
  background: ${cores.laranjaClaro};
  color: ${cores.laranjaEscuro};
  font-weight: 700;

  &::placeholder {
    color: #b66;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const Rodape = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 12px;
`;

const Btn = styled.button<{ $alt?: boolean }>`
  height: 36px;
  border: 0;
  border-radius: 6px;
  font-weight: 900;
  cursor: pointer;
  background: ${({ $alt }) => ($alt ? cores.laranjaClaro : "#fff")};
  color: ${cores.laranjaEscuro};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Linha = styled.hr`
  border: 0;
  border-top: 2px solid rgba(255, 255, 255, 0.2);
  margin: 14px 0;
`;

const Resumo = styled.div`
  font-size: 12px;

  ul {
    padding-left: 16px;
    margin: 6px 0;
  }
  strong {
    font-weight: 900;
  }
`;

enum Step {
  Entrega = 1,
  Pagamento = 2,
  Confirmacao = 3,
}

type CarrinhoItem = {
  id: number;
  nome: string;
  preco: number;
  foto?: string | null;
};

export default function Checkout() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(Step.Entrega);

  // === Form Entrega ===
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  const entregaValida = useMemo(
    () =>
      nome.trim().length >= 3 &&
      /\S+@\S+\.\S+/.test(email) &&
      cep.replace(/\D+/g, "").length >= 8 &&
      endereco.trim().length >= 3 &&
      numero.trim().length >= 1 &&
      cidade.trim().length >= 2 &&
      uf.trim().length >= 2,
    [nome, email, cep, endereco, numero, cidade, uf]
  );

  // === Itens do Redux ===
  const { items: itensCarrinho = [], total = 0 } = useSelector(
    (state: any) => state.carrinho || { items: [], total: 0 }
  ) as { items: CarrinhoItem[]; total: number };

  // Agrupa itens iguais para exibir quantidade
  const itensResumo = useMemo(() => {
    const acc: Record<number, CarrinhoItem & { quantidade: number }> = {};
    for (const it of itensCarrinho) {
      if (!acc[it.id]) acc[it.id] = { ...it, quantidade: 0 };
      acc[it.id].quantidade += 1;
    }
    return Object.values(acc);
  }, [itensCarrinho]);

  // === handlers ===
  function avancar() {
    if (step === Step.Entrega && !entregaValida) return;
    if (step < Step.Confirmacao) setStep((s) => (s + 1) as Step);
  }

  function voltar() {
    if (step > Step.Entrega) setStep((s) => (s - 1) as Step);
    else navigate(-1);
  }

  return (
    <Page>
      <Conteudo>{/* espaço visual do layout */}</Conteudo>

      <Sidebar>
        {step === Step.Entrega && (
          <>
            <Titulo>Entrega</Titulo>
            <Sub>Insira seus dados para entrega.</Sub>

            <Label>Nome completo</Label>
            <Input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Seu nome"
            />

            <Label>E-mail</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="voce@email.com"
            />

            <Row>
              <div>
                <Label>CEP</Label>
                <Input
                  value={cep}
                  onChange={(e) =>
                    setCep(e.target.value.replace(/[^\d-]/g, "").slice(0, 9))
                  }
                  placeholder="00000-000"
                />
              </div>
              <div>
                <Label>Número</Label>
                <Input
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  placeholder="123"
                />
              </div>
            </Row>

            <Label>Endereço</Label>
            <Input
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              placeholder="Rua / Av."
            />

            <Row>
              <div>
                <Label>Cidade</Label>
                <Input
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  placeholder="Cidade"
                />
              </div>
              <div>
                <Label>UF</Label>
                <Input
                  value={uf}
                  onChange={(e) =>
                    setUf(e.target.value.toUpperCase().slice(0, 2))
                  }
                  placeholder="BA"
                />
              </div>
            </Row>

            <Linha />
            <Resumo>
              <strong>Resumo do pedido</strong>
              {itensResumo.length ? (
                <>
                  <ul>
                    {itensResumo.map((it) => (
                      <li key={it.id}>
                        {it.nome} — {it.quantidade} × R$ {it.preco.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <strong>Total:</strong> R$ {total.toFixed(2)}
                  </div>
                </>
              ) : (
                <p>Seu carrinho está vazio.</p>
              )}
            </Resumo>

            <Rodape>
              <Btn onClick={voltar}>Voltar</Btn>
              <Btn $alt onClick={avancar} disabled={!entregaValida}>
                Continuar
              </Btn>
            </Rodape>
          </>
        )}

        {step === Step.Pagamento && (
          <>
            <Titulo>Pagamento</Titulo>
            <Sub>Insira os dados do cartão.</Sub>

            <CartaoForm
              onSubmitTokenize={async (_payload) => {
                // 🔒 Tokenize no gateway e, no sucesso:
                setStep(Step.Confirmacao);
              }}
            />

            <Linha />
            <Resumo>
              <div>
                <strong>Total:</strong> R$ {total.toFixed(2)}
              </div>
            </Resumo>

            <Rodape>
              <Btn onClick={voltar}>Voltar</Btn>
              <Btn $alt disabled>Continuar</Btn>
            </Rodape>
          </>
        )}

        {step === Step.Confirmacao && (
          <>
            <Titulo>Confirmação</Titulo>
            <Sub>
              Pedido realizado com sucesso! Enviamos a confirmação para o seu
              e-mail.
            </Sub>

            <Linha />
            <Resumo>
              <strong>Resumo</strong>
              <div style={{ marginTop: 6 }}>
                <div>
                  <strong>Nome:</strong> {nome}
                </div>
                <div>
                  <strong>Entrega:</strong> {endereco}, {numero} — {cidade}/
                  {uf} — CEP {cep}
                </div>
                <div style={{ marginTop: 6 }}>
                  <strong>Total:</strong> R$ {total.toFixed(2)}
                </div>
              </div>
            </Resumo>

            <Rodape>
              <Btn onClick={() => navigate("/")}>Voltar ao início</Btn>
              <Btn $alt onClick={() => navigate("/")}>Novo pedido</Btn>
            </Rodape>
          </>
        )}
      </Sidebar>
    </Page>
  );
}
