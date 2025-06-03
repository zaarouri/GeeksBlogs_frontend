import React from 'react'

function ResetPasswordPage() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="text-center mb-4">Réinitialiser le mot de passe</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Adresse e-mail</label>
            <input type="email" className="form-control" placeholder="exemple@mail.com" />
          </div>
          <button type="submit" className="btn btn-warning w-100">Envoyer le lien</button>
        </form>
        <div className="text-center mt-3">
          <a href="/login">Retour à la connexion</a>
        </div>
      </div>
    </div>
  )
}

export default ResetPasswordPage
