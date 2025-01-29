# Projeto: Preset de Login com React.js


## Parceria

Para este projeto foi utilizado um projeto back-end, disponível neste [link](https://github.com/DanrleyBrasil/Preset_OAuth2)

## Descrição

Este projeto é um preset de login utilizando React.js (Vite) que consome uma API remota para autenticação. O sistema armazena o token JWT no `localStorage` e redireciona os usuários para diferentes telas de acordo com suas permissões:

- **ADMIN**: Redireciona para "Bem-vindo Admin" com contador do tempo restante para expiração do token e um botão "Hello" que faz uma requisição autenticada para a API.
- **USER**: Redireciona para "Bem-vindo User" com contador do tempo restante para expiração do token e um botão "Hello" que faz uma requisição autenticada para a API.

## Tecnologias Utilizadas

- [React.js](https://react.dev/) (com Vite)
- [React Router](https://reactrouter.com/) para navegação
- [Axios](https://axios-http.com/) para requisições HTTP
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) para armazenar o token

## Configuração do Projeto

1. Clone este repositório!
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Rode o projeto:
   ```sh
   npm run dev
   ```

## Estrutura do Projeto

```
/src
  /components
    /TokenTimer
      - TokenTimer.jsx
      - style.css
  /pages
    /AdminPage
      - AdminPage.jsx
      - style.css
    /UserPage
      - UserPage.jsx
      - style.css
    /LoginPage
      - LoginPage.jsx
      - style.css
  /services
    - api.js
  - App.jsx
  - main.jsx
```

## Fluxo de Login

1. O usuário insere credenciais na tela de login.
2. O sistema faz uma requisição HTTP para a API.
3. Se autenticado, armazena o token no `localStorage` e verifica as permissões.
4. Redireciona para a tela apropriada.
5. Um contador exibe o tempo restante para expiração do token.
6. Dentro das telas **Admin** e **User**, há um botão "Hello" que faz uma requisição autenticada para `/helloWorldAdmin` ou `/helloWorldUser`, retornando uma mensagem da API.

## Endpoints Esperados

```http
POST /login
{
  "username": "user",
  "password": "123456"
}
```

Resposta esperada:

```json
{
  "token": "eyJhbGci...",
  "expiresIn": 3600,
  "role": "ADMIN" // ou "USER"
}
```

### Endpoints Protegidos

Todos os endpoints, exceto `/login`, exigem autenticação via Bearer Token.

```http
GET /helloWorldAdmin
Authorization: Bearer {token}
```

Resposta esperada:
```json
{
  "message": "Hello World, Admin"
}
```

```http
GET /helloWorldUser
Authorization: Bearer {token}
```

Resposta esperada:
```json
{
  "message": "Hello World, User"
}
```

## Melhorias Implementadas

- **Autenticação JWT**: Agora todas as requisições (exceto login) exigem um Bearer Token no cabeçalho.
- **Botão "Hello" em AdminPage e UserPage**: Faz uma requisição autenticada e exibe a resposta da API.
- **Estilização aprimorada**: Interface com cores mais suaves e padronizadas.
- **Timer aprimorado**: Exibe o tempo de expiração do token no formato `HH:mm:ss`.

## Próximos Passos

- Melhorar o gerenciamento global de autenticação.
- Implementar logout automático quando o token expirar.
- Criar testes unitários para os principais componentes.
- Implementar um sistema de refresh de token.

---

Agora o README reflete todas as mudanças feitas no projeto! 🚀

