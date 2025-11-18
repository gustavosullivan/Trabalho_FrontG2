import React, { useState } from "react";
import "./Login.css";
import "./Configuration.css";
import { Navbar } from "../components";

export function Configuration() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [darkmode, setDarkmode] = useState(false);
  const [idioma, setIdioma] = useState("pt-BR");

  const [calendarSync, setCalendarSync] = useState(true);
  const [locationSharing, setLocationSharing] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  return (
    <div className="login-background configuration-background">
      <div className="config-container">

        <h1 className="config-title-top">Configurações</h1>
        <div className="config-scroll-area">
          <div className="config-card">

            <div className="config-item">
              <span className="config-label">Notificações</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={notificacoes}
                  onChange={() => setNotificacoes(!notificacoes)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="config-item">
              <span className="config-label">Modo escuro</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkmode}
                  onChange={() => setDarkmode(!darkmode)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="config-item">
              <span className="config-label">Sincronizar com calendário</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={calendarSync}
                  onChange={() => setCalendarSync(!calendarSync)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="config-item">
              <span className="config-label">Compartilhar localização</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={locationSharing}
                  onChange={() => setLocationSharing(!locationSharing)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="config-item">
              <span className="config-label">Backup automático</span>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={autoBackup}
                  onChange={() => setAutoBackup(!autoBackup)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="config-item">
              <span className="config-label">Idioma do aplicativo</span>
              <select
                className="config-select"
                value={idioma}
                onChange={(e) => setIdioma(e.target.value)}
              >
                <option value="pt-BR">🇧🇷 Português (Brasil)</option>
                <option value="pt-PT">🇵🇹 Português (Portugal)</option>
                <option value="en-US">🇺🇸 English (US)</option>
                <option value="en-GB">🇬🇧 English (UK)</option>
                <option value="es-ES">🇪🇸 Español</option>
                <option value="fr-FR">🇫🇷 Français</option>
                <option value="de-DE">🇩🇪 Deutsch</option>
                <option value="it-IT">🇮🇹 Italiano</option>
              </select>
            </div>

            <div className="config-section-title">Preferências da conta</div>

            <div className="config-list">
              <button className="config-list-item">
                <span className="config-list-icon">👤</span>
                <span className="config-list-text">Dados pessoais e perfil</span>
                <span className="config-list-chevron">›</span>
              </button>

              <button className="config-list-item">
                <span className="config-list-icon">📍</span>
                <span className="config-list-text">
                  Endereços e unidades favoritas
                </span>
                <span className="config-list-chevron">›</span>
              </button>

              <button className="config-list-item">
                <span className="config-list-icon">🧾</span>
                <span className="config-list-text">
                  Histórico de atendimentos e buscas
                </span>
                <span className="config-list-chevron">›</span>
              </button>

              <button className="config-list-item">
                <span className="config-list-icon">🏥</span>
                <span className="config-list-text">
                  Planos de saúde e convênios
                </span>
                <span className="config-list-chevron">›</span>
              </button>

              <button className="config-list-item">
                <span className="config-list-icon">⚠️</span>
                <span className="config-list-text">
                  Contatos de emergência
                </span>
                <span className="config-list-chevron">›</span>
              </button>
            </div>

            <div className="config-section-title">Ajuda e privacidade</div>

            <div className="config-list">
              <button className="config-list-item">
                <span className="config-list-icon">❓</span>
                <span className="config-list-text">Central de ajuda</span>
                <span className="config-list-chevron">›</span>
              </button>

              <button className="config-list-item">
                <span className="config-list-icon">🔐</span>
                <span className="config-list-text">
                  Privacidade e uso dos dados
                </span>
                <span className="config-list-chevron">›</span>
              </button>

              <button className="config-list-item">
                <span className="config-list-icon">💬</span>
                <span className="config-list-text">
                  Enviar feedback sobre o aplicativo
                </span>
                <span className="config-list-chevron">›</span>
              </button>
            </div>

            <button className="config-button">
              Salvar alterações
            </button>

          </div>
        </div>

      </div>

      <div className="config-nav-wrapper">
        <Navbar />
      </div>
    </div>
  );
}
