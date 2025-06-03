import React from 'react' // tu peux ajouter des styles personnalisés ici
import { Link } from 'react-router-dom'


function LoginPage() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Connexion</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Adresse e-mail</label>
            <input type="email" className="form-control" id="email" placeholder="exemple@mail.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mot de passe</label>
            <input type="password" className="form-control" id="password" placeholder="••••••••" />
          </div>
          <div className="mb-3 text-end">
            <a href="/reset-password" className="small text-decoration-none">Mot de passe oublié ?</a>
          </div>
          <Link to='/intro' type="submit" className="btn btn-primary w-100">Se connecter</Link>
        </form>
        <div className="text-center mt-3">
          <span>Pas de compte ? <a href="/register">S'inscrire</a></span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
