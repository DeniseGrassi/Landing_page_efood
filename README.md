# EFOOD – Catálogo de Restaurantes com Carrinho e Checkout

Aplicação React + TypeScript que lista restaurantes, exibe o cardápio de cada um e permite adicionar itens ao carrinho com um fluxo de checkout em abas laterais (Entrega → Pagamento → Confirmação).

Todos os dados (home, perfil, cardápio e pedido) vêm da API pública da EBAC.

 Projeto feito para refletir exclusivamente os dados reais da API e atender ao requisito de integração.

## Deploy
Vercel: https://efood-six-livid.vercel.app/

## Funcionalidades
Home: lista de restaurantes vinda da API (imagem, tipo, título, avaliação e descrição resumida).

Perfil do restaurante: banner + grade de produtos do cardápio (imagem, nome, descrição, porção e preço).

Modal do produto: exibe detalhes e adiciona ao carrinho.

Carrinho lateral (overlay): editar quantidades, remover item, total e navegação para checkout.

## Stack e bibliotecas
Vite + React 18 + TypeScript

React Router (rotas: / e /perfil/:id)

Redux Toolkit + RTK Query (store e data fetching com cache)

styled-components (estilização e temas)

ESLint (lint)

Vite scripts (dev/build/preview)

## API
Base URL usada: https://ebac-fake-api.vercel.app/api/efood

## Endpoints
GET /restaurantes – lista de restaurantes (Home)

GET /restaurantes/:id – detalhes e cardápio (Perfil)

POST /checkout – finaliza pedido e retorna um orderId

Todos os nomes de campos exibidos (ex.: titulo, descricao, tipo, avaliacao, capa, itens do cardapio: id, nome, descricao, preco, foto, porcao) vêm diretamente da API.

## Como rodar localmente
Pré-requisitos: 
  Node.js >= 18

  npm, yarn ou pnpm

## Instalação

### clonar e entrar no projeto
git clone https://github.com/DeniseGrassi/Landing_page_efood.git

### instalar dependências
npm install

### Rodar em desenvolvimento
npm run dev

### Build de produção
npm run build

### Preview do build
npm run preview

## Decisões e notas
RTK Query centraliza as chamadas à API, com cache e estados de loading/erro prontos.

O carrinho é persistido em memória (Redux). Se desejar persistência pós-refresh, habilite um localStorage com redux-persist.

Máscaras/validações básicas foram aplicadas no pagamento para UX; o objetivo do exercício é a integração.

Imagens do cardápio e capa vêm integralmente da API, mantendo fidelidade ao layout proposto.

## Contribuição
Sinta-se à vontade para abrir issues e pull requests com melhorias.

## Licença
Este projeto é livre para uso acadêmico/educacional.