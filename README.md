# Sistema de Cadastro - Grupo World Beauty (ATVI)

Este é um sistema **CLI (Command Line Interface)** desenvolvido como parte da Atividade Prática ATVI para o Grupo World Beauty. O sistema permite o gerenciamento de **clientes, produtos e serviços**, bem como o **registro de consumo** de itens por cliente em unidades independentes da empresa.

---

## ✅ Funcionalidades

* CRUD completo de:

  * Clientes
  * Produtos
  * Serviços
* Registro de consumo de produtos e serviços por cliente
* Listagens especiais:

  * Top 10 clientes que mais consumiram (quantidade)
  * Top 10 clientes que menos consumiram (quantidade)
  * Top 5 clientes que mais consumiram em valor
  * Clientes agrupados por gênero
  * Produtos/serviços mais consumidos (geral e por gênero)

---

## 🚀 Como executar o projeto

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/borroniff/atv-wb-I
   ```

2. **Acesse a pasta do projeto:**

   ```bash
   cd nome-da-pasta
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   npm install typescript
   ```

4. **Compile o projeto TypeScript:**

   ```bash
   npx tsc
   ```

5. **Execute o sistema:**

   ```bash
   node out/app/main.js
   ```

---

## 🧪 Testes automáticos

Para agilizar os testes, o sistema inclui uma opção de **mock automático** que cadastra:

* 30 clientes
* 20 produtos
* 20 serviços
* Consumo aleatório

### Basta escolher no menu:

```
13 - Gerar dados de teste (mock)
```

---

## 📁 Estrutura do projeto

```
src/
├── app/               # Arquivo principal (main.ts)
├── io/                # Entrada de dados (input)
├── modelo/            # Modelos de domínio (Cliente, Produto, etc.)
├── negocio/           # Regras de negócio e funcionalidades
└── mockDados.ts       # Geração automática de dados para testes
```

---

## 🛠 Requisitos

* Node.js
* TypeScript
* VSCode (recomendado)

---

## 👨‍💼 Desenvolvido por

Angelina Borroni Ferreira
