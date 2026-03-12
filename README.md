# PDStore
Projeto desenvolvido como parte do **Desafio final do Projeto Desenvolve Itabira**, com o objetivo de criar uma aplicação de e-commerce utilizando **React** e consumo de API externa.  A aplicação permite que usuários naveguem por produtos, filtrem categorias, visualizem detalhes de itens e gerenciem um carrinho de compras. # 🛒 DevStore - E-commerce Frontend

---

# 🚀 Tecnologias Utilizadas

- React
- Vite
- React Router DOM
- Context API
- CSS
- Fake Store API

---

# 🌐 API Utilizada

Este projeto utiliza a **Fake Store API**, uma API pública que simula um e-commerce real.

API:  
https://fakestoreapi.com

Exemplos de endpoints utilizados:

- `/products`
- `/products/categories`
- `/products/category/{category}`
- `/products/{id}`

---

# 📦 Funcionalidades do Projeto

### 🛍 Listagem de Produtos
A página inicial exibe um **grid responsivo** com todos os produtos retornados pela API.

Cada produto apresenta:

- imagem
- título
- preço
- avaliação
- botão de adicionar ao carrinho

---

### 🔎 Busca de Produtos
O usuário pode pesquisar produtos pelo **nome**, facilitando a navegação na loja.

---

### 🏷 Filtro por Categoria
Os produtos podem ser filtrados por categorias:

- electronics
- jewelery
- men's clothing
- women's clothing

---

### 📄 Página de Detalhes do Produto
Ao clicar em um produto, o usuário é direcionado para uma página com informações completas:

- imagem ampliada
- descrição
- preço
- avaliação
- botão para adicionar ao carrinho

---

### 🛒 Carrinho de Compras
O sistema de carrinho permite:

- adicionar produtos
- remover produtos
- alterar quantidade
- visualizar total da compra

---

### 💾 Persistência de Dados
O carrinho é armazenado utilizando **localStorage**, permitindo que os produtos permaneçam no carrinho mesmo após atualização da página ou fechamento do navegador.

---

# 📂 Estrutura do Projeto

```
src
 ├── components
 │   ├── Header.jsx
 │   ├── ProductCard.jsx
 │   ├── Rating.jsx
 │   └── Notification.jsx
 │
 ├── context
 │   └── CartContext.jsx
 │
 ├── pages
 │   ├── Home.jsx
 │   ├── ProductDetails.jsx
 │   └── Cart.jsx
 │
 ├── services
 │   └── api.js
 │
 ├── styles
 │   └── global.css
 │
 ├── App.jsx
 └── main.jsx
```

---

# ⚙️ Como Executar o Projeto

Clone o repositório:

```bash
git clone https://github.com/seuusuario/devstore
```

Entre na pasta do projeto:

```bash
cd devstore
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Abra no navegador:

```
http://localhost:5173
```

---

# 📱 Responsividade

O layout foi desenvolvido para funcionar em:

- 💻 Desktop
- 📱 Mobile
- 📟 Tablets

Utilizando **CSS responsivo com Grid e Media Queries**.

---

# 🎯 Objetivo do Projeto

Este projeto tem como objetivo demonstrar habilidades em:

- desenvolvimento **Frontend com React**
- consumo de **APIs REST**
- gerenciamento de estado com **Context API**
- criação de **interfaces responsivas**
- organização de código em arquitetura modular

---

# 👨‍💻 Autor

Desenvolvido por:

**Leandro Anastácio de Freitas**

Projeto acadêmico de **Trabalho de Conclusão de Curso (TCC)**.
