const express = require('express');
const router = express.Router();

const users = [
  { username: 'admin', password: '123' },
  { username: 'caique', password: 'password123' },
  { username: 'felipe', password: 'password123' },
  { username: 'laura', password: 'password123' }
];

router.post('/', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username e password são obrigatórios' });
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    return res.status(200).json({ message: 'Login realizado com sucesso', username: user.username });
  } else {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
});

module.exports = router;
