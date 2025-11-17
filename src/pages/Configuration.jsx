import React, { useState } from "react";

export function Configuration() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [darkmode, setDarkmode] = useState(false);
  const [idioma, setIdioma] = useState("pt");

  const handleSave = () => {
    alert("Configurações salvas!");
  };

  return (
    <div className="config-container">
      <h1 className="config-title">Configurações</h1>

      <div className="config-card">

        {/* Notificações */}
        <div className="config-item">
          <span>Notificações</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={notificacoes}
              onChange={() => setNotificacoes(!notificacoes)}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Modo Escuro */}
        <div className="config-item">
          <span>Modo Escuro</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkmode}
              onChange={() => setDarkmode(!darkmode)}
            />
            <span className="slider"></span>
          </label>
        </div>

        {/* Idioma */}
        <div className="config-item">
          <span>Idioma</span>
          <select
            className="config-select"
            value={idioma}
            onChange={(e) => setIdioma(e.target.value)}
          >
            <option value="pt">Português</option>
            <option value="en">Inglês</option>
            <option value="es">Espanhol</option>
          </select>
        </div>

        <button className="config-button" onClick={handleSave}>
          Salvar Alterações
        </button>
      </div>
    </div>
  );
}
