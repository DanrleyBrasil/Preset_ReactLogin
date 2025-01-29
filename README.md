# Projeto: Preset de Login com React.js

## Descrição

Este projeto é um preset de login utilizando React.js (Vite) que consome uma API remota para autenticação. O sistema armazena o token JWT no `localStorage` e redireciona os usuários para diferentes telas de acordo com suas permissões:

- **ADMIN**: Redireciona para "Bem-vindo Admin" com contador do tempo restante para expiração do token.
- **USER**: Redireciona para "Bem-vindo User" com contador do tempo restante para expiração do token.

## Tecnologias Utilizadas

- [React.js](https://react.dev/) (com Vite)
- [React Router](https://reactrouter.com/) para navegação
- [Axios](https://axios-http.com/) para requisições HTTP
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) para armazenar o token

## Configuração do Projeto

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/preset-login-react.git
   cd preset-login-react
   ```
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
    - LoginForm.jsx
    - TokenTimer.jsx
  /pages
    - AdminPage.jsx
    - UserPage.jsx
    - LoginPage.jsx
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

## Próximos Passos

- Implementar a tela de login (`LoginForm.jsx`)
- Criar o serviço de autenticação (`api.js`)
- Implementar a navegação e redirecionamento com `react-router-dom`
- Criar os componentes para exibir a contagem regressiva da expiração do token

