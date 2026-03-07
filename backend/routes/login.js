const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // TODO: Caique, implemente aqui a lógica para validar o usuário e a senha usando apenas variáveis estáticas (sem banco de dados).
  // Estruturar retornos corretos: 200 (OK), 401 (Unauthorized), 400 (Bad Request).
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username e password são obrigatórios' });
  }

  // Exemplo provisório de validação (alterar conforme regra de negócio)
  if (username === 'admin' && password === '123') {
    return res.status(200).json({ message: 'Login realizado com sucesso' });
  } else {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

module.exports = router;
