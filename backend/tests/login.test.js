const request = require('supertest');
const app = require('../app');

describe('POST /login', () => {
  it('deve retornar 400 se faltar username ou password', async () => {
    const res = await request(app).post('/login').send({ username: 'admin' });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('deve retornar 200 para credenciais corretas mockadas', async () => {
    // Nota: O teste assume 'admin' e '123' como as credenciais provisórias corretas mockadas em routes/login.js
    const res = await request(app).post('/login').send({ username: 'admin', password: '123' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });

  it('deve retornar 401 para credenciais incorretas', async () => {
    const res = await request(app).post('/login').send({ username: 'admin', password: 'wrongpassword' });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('error');
  });
});
