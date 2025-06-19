import './Error404.scss';
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <main className="error-page">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="error-link">Retourner sur la page d'accueil</Link>
    </main>
  );
}

export default Error404;
