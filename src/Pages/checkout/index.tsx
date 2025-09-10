import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import CartaoForm from "../../components/CartaoForm";
import { cores } from "../../styles";

/* ============ UI ============ */
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

/* ============ Tipos/Constantes ============ */
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

/* ============ Helpers de validação ============ */
const emailOk = (v: string) =>
  // tolerante e suficiente para formulário de checkout
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

const cepOk = (v: string) => /^\d{5}-?\d{3}$/.test(v.replace(/\s/g, ""));

const ufOk = (v: string) => /^[A-Za-z]{2}$/.test(v.trim());

const numeroOk = (v: string) => {
  const n = Number(String(v).trim());
  return Number.isFinite(n) && n > 0; // evita "0", vazio, NaN
};

/* ============ Componente ============ */
export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Step inicial conforme a rota
  const initialStep =
    location.pathname.endsWith("/pagamento") ? Step.Pagamento : Step.Entrega;
  const [step, setStep] = useState<Step>(initialStep);

  useEffect(() => {
    setStep(location.pathname.endsWith("/pagamento") ? Step.Pagamento : Step.Entrega);
  }, [location.pathname]);

  // Campos de entrega
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  // Redux carrinho (com fallback seguro)
  const { items: itensCarrinho = [], total = 0 } = useSelector(
    (state: any) => state?.carrinho ?? { items: [], total: 0 }
  ) as { items: CarrinhoItem[]; total: number };

  // Agrupa itens iguais para o resumo
  const itensResumo = useMemo(() => {
    const acc: Record<number, CarrinhoItem & { quantidade: number }> = {};
    for (const it of itensCarrinho) {
      if (!acc[it.id]) acc[it.id] = { ...it, quantidade: 0 };
      acc[it.id].quantidade += 1;
    }
    return Object.values(acc);
  }, [itensCarrinho]);

  // Validação da etapa de entrega
  const entregaValida = useMemo(() => {
    return (
      nome.trim().length >= 3 &&
      emailOk(email) &&
      cepOk(cep) &&
      endereco.trim().length >= 3 &&
      numeroOk(numero) &&
      cidade.trim().length >= 2 &&
      ufOk(uf)
    );
  }, [nome, email, cep, endereco, numero, cidade, uf]);

  /* ===== Handlers ===== */
  function avancar() {
    if (step === Step.Entrega) {
      if (!entregaValida) return; // por segurança
      navigate("/checkout/pagamento");
      setStep(Step.Pagamento);
      return;
    }
    if (step < Step.Confirmacao) setStep((s) => (s + 1) as Step);
  }

  function voltar() {
    if (step === Step.Pagamento) {
      navigate("/checkout");
      setStep(Step.Entrega);
      return;
    }
    if (step > Step.Entrega) setStep((s) => (s - 1) as Step);
    else navigate(-1);
  }

  /* ============ Render ============ */
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
              onBlur={(e) => setNome(e.target.value.trim())}
              placeholder="Seu nome"
              autoComplete="name"
              inputMode="text"
            />

            <Label>E-mail</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={(e) => setEmail(e.target.value.trim())}
              placeholder="seuemail@email.com"
              autoComplete="email"
              inputMode="email"
            />

            <Row>
              <div>
                <Label>CEP</Label>
                <Input
                  value={cep}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^\d-]/g, "");
                    // mantém máscara simples #####-###
                    const digits = raw.replace(/\D/g, "").slice(0, 8);
                    const masked =
                      digits.length > 5
                        ? `${digits.slice(0, 5)}-${digits.slice(5)}`
                        : digits;
                    setCep(masked);
                  }}
                  onBlur={(e) => setCep(e.target.value.trim())}
                  placeholder="00000-000"
                  autoComplete="postal-code"
                  inputMode="numeric"
                />
              </div>
              <div>
                <Label>Número</Label>
                <Input
                  value={numero}
                  onChange={(e) =>
                    setNumero(e.target.value.replace(/[^\d]/g, "").slice(0, 6))
                  }
                  onBlur={(e) => setNumero(e.target.value.trim())}
                  placeholder="123"
                  inputMode="numeric"
                />
              </div>
            </Row>

            <Label>Endereço</Label>
            <Input
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              onBlur={(e) => setEndereco(e.target.value.trim())}
              placeholder="Rua / Av."
              autoComplete="address-line1"
              inputMode="text"
            />

            <Row>
              <div>
                <Label>Cidade</Label>
                <Input
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  onBlur={(e) => setCidade(e.target.value.trim())}
                  placeholder="Cidade"
                  autoComplete="address-level2"
                  inputMode="text"
                />
              </div>
              <div>
                <Label>UF</Label>
                <Input
                  value={uf}
                  onChange={(e) => setUf(e.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 2))}
                  onBlur={(e) => setUf(e.target.value.toUpperCase().trim())}
                  placeholder="BA"
                  autoComplete="address-level1"
                  inputMode="text"
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
              <Btn type="button" onClick={voltar}>Voltar</Btn>
              <Btn
                type="button"
                $alt
                onClick={avancar}
                disabled={!entregaValida}
                aria-disabled={!entregaValida}
              >
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
                // Aqui você tokeniza/envia ao gateway.
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
              <Btn type="button" onClick={voltar}>Voltar</Btn>
              {/* Mantém desabilitado; a continuidade ocorre dentro do CartaoForm */}
              <Btn type="button" $alt disabled>
                Continuar
              </Btn>
            </Rodape>
          </>
        )}

        {step === Step.Confirmacao && (
          <>
            <Titulo>Confirmação</Titulo>
            <Sub>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
            </Sub>
            <Sub>
              Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
            </Sub>
            <Sub>
              Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            </Sub>
            <Sub>
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </Sub>

            <Linha />
            <Resumo>
              <strong>Resumo</strong>
              <div style={{ marginTop: 6 }}>
                <div>
                  <strong>Nome:</strong> {nome}
                </div>
                <div>
                  <strong>Entrega:</strong> {endereco}, {numero} — {cidade}/{uf} — CEP {cep}
                </div>
                <div style={{ marginTop: 6 }}>
                  <strong>Total:</strong> R$ {total.toFixed(2)}
                </div>
              </div>
            </Resumo>

            <Rodape>
              <Btn type="button" onClick={() => navigate("/")}>Voltar ao início</Btn>
              <Btn type="button" $alt onClick={() => navigate("/")}>Novo pedido</Btn>
            </Rodape>
          </>
        )}
      </Sidebar>
    </Page>
  );
}
