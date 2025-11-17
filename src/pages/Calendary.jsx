import React from "react";

export function Calendary() {
  const hoje = new Date();
  const mes = hoje.getMonth();
  const ano = hoje.getFullYear();

  // Nome dos meses
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  // Descobre quantos dias o mês tem
  const diasNoMes = new Date(ano, mes + 1, 0).getDate();

  // Descobre qual dia da semana começa
  const primeiroDiaSemana = new Date(ano, mes, 1).getDay(); // 0 = Domingo

  // Monta lista final com espaços vazios + dias
  const dias = [];

  // Espaços antes do primeiro dia
  for (let i = 0; i < primeiroDiaSemana; i++) {
    dias.push("");
  }

  // Dias do mês
  for (let d = 1; d <= diasNoMes; d++) {
    dias.push(d);
  }

  return (
    <div className="calendar-container">
      <h1 className="calendar-title">{meses[mes]} {ano}</h1>

      <div className="calendar-grid">
        <div className="day-name">Dom</div>
        <div className="day-name">Seg</div>
        <div className="day-name">Ter</div>
        <div className="day-name">Qua</div>
        <div className="day-name">Qui</div>
        <div className="day-name">Sex</div>
        <div className="day-name">Sab</div>

        {dias.map((dia, index) => (
          <div
            key={index}
            className={`day-cell ${dia === hoje.getDate() ? "today" : ""}`}
          >
            {dia}
          </div>
        ))}
      </div>
    </div>
  );
}
