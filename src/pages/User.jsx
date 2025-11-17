import React from "react";

export function User() {
  const user = {
    nome: "Usuário Exemplo",
    email: "usuario@email.com",
  };

  return (
    <div className="user-container">
      <div className="user-card">
        <div className="user-photo">
          <img src="https://via.placeholder.com/120" alt="Foto do usuário" />
        </div>

        <h2 className="user-name">{user.nome}</h2>
        <p className="user-email">{user.email}</p>

        <button className="user-button">Editar Perfil</button>

        <div className="user-info-section">
          <h3>Informações</h3>
          <p><strong>ID:</strong> 12345</p>
          <p><strong>Status:</strong> Ativo</p>
          <p><strong>Criado em:</strong> 10/02/2025</p>
        </div>
      </div>
    </div>
  );
}
