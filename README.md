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

Controle de acesso:
Perfis disponíveis:
