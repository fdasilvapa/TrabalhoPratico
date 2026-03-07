# Trabalho Prático - Ciclo 1 - Sistemas Distribuídos

## Alunos

- Caique Moran de Souza - 2312478
- Felipe da Silva Pereira Alves - 2310995
- Laura Beatriz Silva Serbêto - 2321107

### Tecnologias utilizadas:
- Frontend: React.js para a construção da interface de usuário e componentização da tela de login.

- Comunicação HTTP: Axios para o envio das requisições POST.

- Estilização: Tailwind CSS.

- Backend: Node.js como ambiente de execução do servidor HTTP.

- Framework Web: Express.js para a criação ágil do endpoint /login e gerenciamento das rotas da API.

### Atribuição de tarefas:

👩‍💻 Laura: Frontend
- Criar o projeto React e montar a tela de login com usuário e senha (garantindo o campo password).
- Fazer o botão "Entrar" disparar a requisição POST para a API.
- Tratar as respostas da API para exibir as mensagens de sucesso ou erro na interface.

👨‍💻 Caique: Backend - Regras de Negócio
- Criar a rota específica do endpoint POST /login.
- Escrever a lógica para validar o usuário e a senha usando apenas variáveis estáticas , garantindo a regra de não usar banco de dados.
- Estruturar os retornos corretos da API: 200 (OK) para sucesso, 401 (Unauthorized) para credenciais inválidas e 400 (Bad Request) se faltar algum dado na requisição.

🕵️‍♂️ Felipe: Backend - Infraestrutura, Testes e Entrega
- Fazer o setup inicial do Node.js.
- Realizar os testes de API para garantir que as rotas do Caique estão retornando os status corretos antes de integrar com o frontend.
- Escrever o arquivo README.md obrigatório , detalhando as tecnologias usadas e, o mais importante, o passo a passo exato para rodar o backend e o frontend.
- Fazer o teste final de "prova real": rodar o projeto do zero seguindo apenas as instruções do README para garantir que não haverá desconto de pontos.

## Instruções de execução

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado na máquina (versão 18+ recomendada).

### Backend

1. Abra um terminal e navegue até a pasta do backend:
   ```bash
   cd backend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm run dev
   ```
   *O backend estará acessível em `http://localhost:3001`.*

**Para rodar os testes da API:**
```bash
npm test
```

### Frontend

*(Esta seção será atualizada pela Laura após a criação do app React)*

1. Navegue até a pasta do frontend e instale as dependências:
   ```bash
   cd frontend
   npm install
   ```
2. Execute o frontend:
   ```bash
   npm start
   ```
