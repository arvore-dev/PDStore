# 🛒 PDStore

Projeto desenvolvido como parte do **Desafio Final do Projeto Desenvolve Itabira**, com o objetivo de criar uma aplicação de e-commerce utilizando **React**, consumo de API externa e gerenciamento de estado global.

A aplicação permite que usuários naveguem por produtos, filtrem categorias, visualizem detalhes e realizem compras simuladas.

---

# 🚀 Tecnologias Utilizadas

* React
* Vite
* React Router DOM
* Context API
* Axios
* CSS (customizado)
* LocalStorage

---

# 🌐 API Utilizada

O projeto consome dados de duas APIs públicas:

### Fake Store API

https://fakestoreapi.com

### DummyJSON API

https://dummyjson.com/products

---

# 📦 Funcionalidades

### 🛍 Listagem de Produtos

* Exibição em grid responsivo
* Nome, imagem, preço e avaliação
* Botão de adicionar ao carrinho

---

### 🏷 Filtro por Categoria

* Filtragem dinâmica por categorias
* Atualização em tempo real dos produtos

---

### 🔎 Página de Detalhes

* Imagem ampliada
* Descrição completa
* Preço
* Botão de compra

---

### 🛒 Carrinho de Compras

* Adicionar produtos
* Remover produtos
* Atualizar quantidade
* Cálculo automático de total

---

### 💳 Checkout e Pagamento

* Simulação de pagamento via:

  * Cartão de crédito
  * Pix
* Validação de dados
* Feedback de sucesso ou erro

---

### 💾 Persistência de Dados

* Usuários e carrinho salvos no **localStorage**
* Carrinho vinculado ao usuário logado

---

### 🌙 Dark Mode

* Alternância de tema claro/escuro
* Preferência salva no navegador

---

# 🔐 Credenciais de Login (Teste)

Use os usuários abaixo para acessar o sistema:

* Email: `admin@email.com`
  Senha: `admin123`

* Email: `user@email.com`
  Senha: `user123`

* Email: `teste@email.com`
  Senha: `teste123`

---

# 💳 Dados para Teste de Pagamento

### Cartão de Crédito

* Número: `4111 1111 1111 1111`
* Nome: `CLIENTE TESTE`
* Validade: `12/30`
* CVV: `123`

### ⚠️ Regras

* O pagamento só será aprovado com esses dados exatos
* Qualquer diferença resultará em erro

---

### ⚡ Pix

* Basta selecionar a opção Pix
* Pagamento aprovado automaticamente

---

# 📂 Estrutura do Projeto

```
src
 ├── components
 │   ├── Header.jsx
 │   ├── Footer.jsx
 │   ├── ProductCard.jsx
 │   ├── Rating.jsx
 │   └── Notification.jsx
 │
 ├── context
 │   ├── AuthContext.jsx
 │   └── CartContext.jsx
 │
 ├── pages
 │   ├── Home.jsx
 │   ├── Login.jsx
 │   ├── Register.jsx
 │   ├── Cart.jsx
 │   ├── Checkout.jsx
 │   ├── ProductDetail.jsx
 │   ├── About.jsx
 │   └── Contact.jsx
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

### 1. Acesse a pasta do projeto

```bash
cd Desktop/TccPD/ecommerce-frontend
```

---

### 2. Instale as dependências

```bash
npm install
```

---

### 3. Execute o projeto

```bash
npm run dev
```

---

### 4. Acesse no navegador

```
http://localhost:5173
```

---

# 📱 Responsividade

O projeto foi desenvolvido para funcionar em:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablets

Utilizando:

* CSS Grid
* Flexbox
* Media Queries

---

# 🎯 Objetivo do Projeto

Demonstrar habilidades em:

* Desenvolvimento Frontend com React
* Consumo de APIs REST
* Gerenciamento de estado com Context API
* Criação de interfaces modernas e responsivas
* Organização e arquitetura de código

---

# 👨‍💻 Autor

Desenvolvido por:

**Leandro Freitas**

Projeto acadêmico — Desafio Final
Projeto Desenvolve Itabira

---

# ✅ Status do Projeto

✔ Finalizado
✔ Funcional
✔ Pronto para avaliação
✔ Pronto para deploy
