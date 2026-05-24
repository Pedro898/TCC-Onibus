export default function BusCard({ linha }) {
  return (
    <article className="bus-card">
      <div>
        <span className="bus-line">Linha {linha.linha}</span>
        <h2>{linha.destino}</h2>
      </div>

      <dl className="bus-details">
        <div>
          <dt>Horario</dt>
          <dd>{linha.horario}</dd>
        </div>
        <div>
          <dt>Lotacao</dt>
          <dd>{linha.lotacao}</dd>
        </div>
      </dl>
    </article>
  );
}
