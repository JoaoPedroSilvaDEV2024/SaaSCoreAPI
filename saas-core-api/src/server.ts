import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";

const app = express();

app.use(cors());
app.use(express.json());

const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "SaaS Core API",
    version: "1.0.0",
    description: "API profissional com JWT e RBAC"
  },
  servers: [
    {
      url: "http://localhost:3000"
    }
  ],
  paths: {
    "/auth/register": {
      post: {
        summary: "Criar usuário",
        responses: {
          200: { description: "Usuário criado" }
        }
      }
    },
    "/auth/login": {
      post: {
        summary: "Login",
        responses: {
          200: { description: "Retorna token JWT" }
        }
      }
    },
    "/users": {
      get: {
        summary: "Listar usuários",
        responses: {
          200: { description: "Lista usuários" }
        }
      }
    }
  }
};

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("API ON 3000");
});