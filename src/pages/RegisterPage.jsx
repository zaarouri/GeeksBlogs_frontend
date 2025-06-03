import React from 'react'

function RegisterPage() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">Créer un compte</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Nom</label>
            <input type="text" className="form-control" placeholder="Votre nom" />
          </div>
          <div className="mb-3">
            <label className="form-label">Adresse e-mail</label>
            <input type="email" className="form-control" placeholder="exemple@mail.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <input type="password" className="form-control" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn btn-primary w-100">S'inscrire</button>
        </form>
        <div className="text-center mt-3">
          <span>Déjà un compte ? <a href="/login">Se connecter</a></span>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
