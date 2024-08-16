import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error404.scss';

function Error404() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <main className='error-container'>
      <h1 className='error-code'>404</h1>
      <h2 className='error-message'>
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <a href="/" onClick={handleGoHome} className='link-home'>
        Retourner sur la page d’accueil
      </a>
    </main>
  );
}

export default Error404;
