# 🛒 PDStore

Projeto desenvolvido como parte do **Desafio Final do Projeto Desenvolve Itabira**, com o objetivo de construir uma aplicação completa de e-commerce utilizando **React**, consumo de API externa e gerenciamento de estado.

A aplicação permite que usuários naveguem por produtos, filtrem categorias, visualizem detalhes e gerenciem um carrinho de compras de forma dinâmica.

---

# 🚀 Tecnologias Utilizadas

* React
* Vite
* React Router DOM
* Context API
* Axios
* CSS

---

# 🌐 API Utilizada

Este projeto utiliza duas APIs públicas para simulação de dados:

### Fake Store API

https://fakestoreapi.com

### DummyJSON

https://dummyjson.com/products

---

# 📦 Funcionalidades

## 🛍 Listagem de Produtos

* Exibição de produtos em grid responsivo
* Imagem, nome, preço e avaliação
* Navegação para página de detalhes

## 🔎 Filtro por Categoria

* Filtragem dinâmica por categorias
* Atualização instantânea dos produtos

## 📄 Detalhes do Produto

* Visualização completa do item
* Descrição detalhada
* Botão para adicionar ao carrinho

## 🛒 Carrinho de Compras

* Adicionar e remover produtos
* Atualizar quantidade
* Cálculo automático de total

## 💳 Checkout

* Simulação de pagamento
* Opção de cartão e Pix
* Validação de dados

## 🌙 Dark Mode

* Alternância entre tema claro e escuro
* Persistência com localStorage

## 💾 Persistência de Dados

* Carrinho salvo por usuário
* Dados armazenados no localStorage

---

# 📂 Estrutura do Projeto

```
ecommerce-frontend/
│
├── public/
│   └── (imagens como visa.png, pix.png, etc)
│
├── src/
│   ├── assets/
│   │   └── logos
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Rating.jsx
│   │   └── Notification.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── CartContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

# ⚙️ Como Executar o Projeto

## 📥 1. Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

---

## 📂 2. Acessar a pasta do projeto

```bash
cd Desktop/TccPD/ecommerce-frontend
```

> ⚠️ Caminho baseado no ambiente de desenvolvimento do autor (Windows)

---

## 📦 3. Instalar dependências

```bash
npm install
```

---

## ▶️ 4. Executar o projeto

```bash
npm run dev
```

---

## 🌐 5. Acessar no navegador

```
http://localhost:5173
```

---

# 📱 Responsividade

O projeto foi desenvolvido com foco em responsividade:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablets

Utilizando **CSS Grid + Flexbox + Media Queries**

---

# 🎯 Objetivo do Projeto

Demonstrar habilidades em:

* Desenvolvimento Frontend com React
* Consumo de APIs REST
* Gerenciamento de estado global (Context API)
* Criação de interfaces responsivas
* Organização de código em arquitetura modular

---

# 👨‍💻 Autor

**Leandro Freitas**

Projeto acadêmico – Desafio Final
Projeto Desenvolve Itabira

---

# ✅ Status

✔ Projeto finalizado
✔ Bugs corrigidos
✔ Pronto para avaliação
