import React, { useMemo, useState } from "react";
import { Button, Form, Help, Input, Label, Row, ErrorText } from "./styles";


type CardBrand = "Visa" | "Mastercard" | "Amex" | "Elo" | "Hipercard" | "Desconhecida";

function onlyDigits(s: string) {
    return s.replace(/\D+/g, "");
}

function formatCardNumber(value: string) {
    const digits = onlyDigits(value).slice(0, 19);
    return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
}

function detectBrand(pan: string): CardBrand {
    if (/^4\d{0,}$/.test(pan)) return "Visa";
    if (/^5[1-5]\d{0,}$/.test(pan) || /^2(2|7)\d{0,}$/.test(pan)) return "Mastercard";
    if (/^3[47]\d{0,}$/.test(pan)) return "Amex";
    if (/^(4011|4312|4389|4514|4576|5041|509|6277|6362|650|651|655)\d*$/.test(pan)) return "Elo";
    if (/^(606282|3841)\d*$/.test(pan)) return "Hipercard";
    return "Desconhecida";
}

function luhnValid(pan: string) {
    const digits = onlyDigits(pan);
    if (digits.length < 12) return false;
    let sum = 0;
    let alt = false;
    for (let i = digits.length - 1; i >= 0; i--) {
        let n = parseInt(digits[i], 10);
        if (alt) {
            n *= 2;
            if (n > 9) n -= 9;
        }
        sum += n;
        alt = !alt;
    }
    return sum % 10 === 0;
}

function formatExpiry(value: string) {
    const digits = onlyDigits(value).slice(0, 4);
    if (digits.length <= 2) return digits;
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

function validExpiry(exp: string) {
    if (!/^\d{2}\/\d{2}$/.test(exp)) return false;
    const [mmStr, yyStr] = exp.split("/");
    const mm = Number(mmStr);
    const yy = Number(yyStr);
    if (mm < 1 || mm > 12) return false;


    const fullYear = 2000 + yy;
    const now = new Date();
    const expDate = new Date(fullYear, mm, 0, 23, 59, 59);
    return expDate >= now;
}

function formatCvv(value: string, brand: CardBrand) {
    const max = brand === "Amex" ? 4 : 3;
    return onlyDigits(value).slice(0, max);
}

function formatHolder(value: string) {
    return value
        .replace(/\s+/g, " ")
        .replace(/[^a-zA-ZÀ-ÿ\s']/g, "")
        .toUpperCase();
}

export default function CartaoForm({
    onSubmitTokenize
}: {
    onSubmitTokenize: (payload: {
        number: string;
        holder: string;
        expiryMonth: string;
        expiryYear: string;
        cvv: string;
    }) => Promise<void> | void;
}) {
    const [number, setNumber] = useState("");
    const [holder, setHolder] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    const digits = useMemo(() => onlyDigits(number), [number]);
    const brand = useMemo(() => detectBrand(digits), [digits]);

    const errors = {
        number: number && !luhnValid(number) ? "Número inválido" : "",
        holder: holder && holder.trim().length < 5 ? "Digite o nome completo" : "",
        expiry: expiry && !validExpiry(expiry) ? "Validade inválida" : "",
        cvv:
            cvv &&
                ((brand === "Amex" && cvv.length !== 4) || (brand !== "Amex" && cvv.length !== 3))
                ? "CVV inválido"
                : ""
    };

    const isValid =
        luhnValid(number) &&
        holder.trim().length >= 5 &&
        validExpiry(expiry) &&
        ((brand === "Amex" && cvv.length === 4) || (brand !== "Amex" && cvv.length === 3));

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!isValid) return;

        const [mm, yy] = expiry.split("/");
        await onSubmitTokenize({
            number: onlyDigits(number),
            holder: holder.trim(),
            expiryMonth: mm,
            expiryYear: `20${yy}`,
            cvv
        });

        // Limpa após sucesso
        setNumber("");
        setHolder("");
        setExpiry("");
        setCvv("");
    }

    return (
        <Form onSubmit={handleSubmit} autoComplete="on">
            <div>
                <Label htmlFor="cc-number">
                    Número do cartão {brand !== "Desconhecida" && `· ${brand}`}
                </Label>
                <Input
                    id="cc-number"
                    name="cc-number"
                    inputMode="numeric"
                    autoComplete="cc-number"
                    placeholder="0000 0000 0000 0000"
                    value={number}
                    onChange={(e) => setNumber(formatCardNumber(e.target.value))}
                    $error={!!errors.number}
                    aria-invalid={!!errors.number}
                    aria-describedby="err-number"
                    maxLength={19 + 3}
                />
                {errors.number ? (
                    <ErrorText id="err-number">{errors.number}</ErrorText>
                ) : (
                    <Help>Nunca armazene o número. Envie apenas ao provedor para tokenizar.</Help>
                )}
            </div>

            <div>
                <Label htmlFor="cc-name">Nome impresso no cartão</Label>
                <Input
                    id="cc-name"
                    name="cc-name"
                    autoComplete="cc-name"
                    placeholder="NOME COMPLETO"
                    value={holder}
                    onChange={(e) => setHolder(formatHolder(e.target.value))}
                    $error={!!errors.holder}
                    aria-invalid={!!errors.holder}
                    aria-describedby="err-holder"
                    autoCapitalize="characters"
                />
                {errors.holder && <ErrorText id="err-holder">{errors.holder}</ErrorText>}
            </div>

            <Row>
                <div>
                    <Label htmlFor="cc-exp">Validade (MM/AA)</Label>
                    <Input
                        id="cc-exp"
                        name="cc-exp"
                        inputMode="numeric"
                        autoComplete="cc-exp"
                        placeholder="MM/AA"
                        value={expiry}
                        onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                        $error={!!errors.expiry}
                        aria-invalid={!!errors.expiry}
                        aria-describedby="err-expiry"
                        maxLength={5}
                    />
                    {errors.expiry && <ErrorText id="err-expiry">{errors.expiry}</ErrorText>}
                </div>

                <div>
                    <Label htmlFor="cc-csc">CVV</Label>
                    <Input
                        id="cc-csc"
                        name="cc-csc"
                        inputMode="numeric"
                        autoComplete="cc-csc"
                        placeholder={brand === "Amex" ? "4 dígitos" : "3 dígitos"}
                        value={cvv}
                        onChange={(e) => setCvv(formatCvv(e.target.value, brand))}
                        $error={!!errors.cvv}
                        aria-invalid={!!errors.cvv}
                        aria-describedby="err-cvv"
                        onPaste={(e) => e.preventDefault()} // opcional: evita colar CVV
                        maxLength={brand === "Amex" ? 4 : 3}
                    />
                    {errors.cvv && <ErrorText id="err-cvv">{errors.cvv}</ErrorText>}
                </div>
            </Row>

            <Button type="submit" disabled={!isValid}>
                Pagar com cartão
            </Button>
        </Form>
    );
}
