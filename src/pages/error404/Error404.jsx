import React from "react";
import { Link } from "react-router-dom";
import './Error404.scss';

 function Error404() {
  return (
    <main className="error-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="link-home">     {/* Lien de navigation vers la page d'accueil */}
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default Error404