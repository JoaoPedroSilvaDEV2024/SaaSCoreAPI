# 🚀 SaaS Core API ELITE

API backend profissional desenvolvida com **Node.js + TypeScript + PostgreSQL**, focada em arquitetura moderna para sistemas SaaS multi-tenant.

Projeto criado para demonstrar domínio em:

- Autenticação JWT
- Controle de acesso (RBAC)
- Multi-tenant
- CRUD de usuários
- PostgreSQL
- TypeScript
- Express
- Documentação Swagger
- Estrutura profissional de backend

---

# 📌 Visão Geral

O sistema simula a base de uma plataforma SaaS onde múltiplas empresas utilizam o mesmo sistema com separação de dados por tenant.

Cada empresa possui seus próprios usuários e permissões.

---

# 🧠 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- PostgreSQL
- JWT (jsonwebtoken)
- bcrypt
- CORS
- Swagger UI

---

# 🏗️ Arquitetura

```text
src/
 ├ config/
 │   db.ts
 │
 ├ middlewares/
 │   auth.ts
 │   role.ts
 │
 ├ routes/
 │   auth.ts
 │   users.ts
 │
 └ server.ts
```
---

# 🔐 Funcionalidades
### Autenticação:
- Cadastro de usuário
- Login com JWT
- Senha criptografada com bcrypt

### Controle de acesso
Perfis disponíveis:
- admin
- manager
- user

### Usuários
- Criar usuário
- Listar usuários
- Atualizar usuário
- Deletar usuário

### Multi-Tenant
Cada usuário pertence a uma empresa (company_id).

---

# 🗄️ Banco de Dados

### Criar banco

```sql
CREATE DATABASE saascore;
```
### Tabela companies

```sql
CREATE TABLE companies (
 id SERIAL PRIMARY KEY,
 name VARCHAR(100)
);
```
### Tabela users
```sql
CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 name VARCHAR(100),
 email VARCHAR(100) UNIQUE,
 password TEXT,
 role VARCHAR(20),
 company_id INT REFERENCES companies(id)
);
```
### Empresa inicial
```sql
INSERT INTO companies(name)
VALUES ('Minha Empresa');
```
---

# ⚙️ Instalação

### Clonar projeto
```bash
git clone URL_DO_REPOSITORIO
cd saas-core-api
```
### Instalar dependências
```bash
npm install
```
### Rodar projeto
```bash
npm run dev
```

### 🌐 Servidor
```bash
http://localhost:3000
```
### 📘 Swagger
Documentação interativa:
```bash
http://localhost:3000/docs
```
# 🔥 Rotas da API
### Auth
Cadastro:
```bash
POST /auth/register
```
Body:
```bash
{
  "name": "Joao",
  "email": "joao@gmail.com",
  "password": "123456"
}
```
