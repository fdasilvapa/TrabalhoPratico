import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage('Preencha os campos!');
      setStatus('warning');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/login', {
        username,
        password
      });

      if (response.status === 200) {
        setMessage(response.data.message);
        setStatus('success');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setMessage('Credenciais inválidas.');
          setStatus('error');
        } else if (error.response.status === 400) {
          setMessage(error.response.data.error);
          setStatus('warning');
        } else {
          setMessage('Erro no servidor!');
          setStatus('error');
        }
      } else {
        setMessage('Falha na conexão com o servidor.');
        setStatus('error');
      }
    }
  };

  return (
    <div className="flex flex-col  items-center p-8 bg-mario-blue border-4 border-mario-dark rounded-xl shadow-[8px_8px_0px_#000000] w-[400px]">
      <h1 className="text-white text-2xl mb-8 text-center" style={{ textShadow: '2px 2px 0 #E52521' }}>
        LOGIN
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <div className="flex flex-col gap-2">
          <label className="text-white text-xs uppercase" htmlFor="username">Usuário</label>
          <input
            id="username"
            type="text"
            className="p-3 bg-white border-2 border-mario-dark font-sans text-sm focus:outline-none focus:ring-4 focus:ring-mario-yellow rounded"
            placeholder="Digite o seu usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 relative">
          <label className="text-white text-xs uppercase" htmlFor="password">Senha</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="p-3 bg-white border-2 border-mario-dark font-sans text-sm focus:outline-none focus:ring-4 focus:ring-mario-yellow rounded w-full pr-12"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-mario-dark hover:scale-110 transition-transform cursor-pointer"
            >
              {showPassword ? (
                <i className="fa-solid fa-eye text-lg"></i>
              ) : (
                <i className="fa-solid fa-eye-slash text-lg"></i>
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 px-8 py-3 bg-mario-yellow border-4 border-mario-dark text-mario-dark font-bold text-xl uppercase shadow-[4px_4px_0px_#000000] hover:bg-yellow-300 active:translate-y-1 active:shadow-[2px_2px_0px_#000000] transition-all"
        >
          Entrar
        </button>
      </form>

      {message && (
        <div className={`mt-8 p-4 border-4 border-mario-dark w-full text-center shadow-[4px_4px_0px_#000000] animate-pulse
          ${status === 'success' ? 'bg-mario-green text-white' : ''}
          ${status === 'error' ? 'bg-mario-red text-white' : ''}
          ${status === 'warning' ? 'bg-mario-yellow text-mario-dark' : ''}
        `}>
          <p className="text-xs leading-relaxed">{message}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
