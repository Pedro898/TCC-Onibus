import BusCard from '../components/BusCard';
import linhas from '../mock/linhas.json';

export default function Home() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p>Dashboard</p>
        <h1>Monitoramento de onibus em tempo real</h1>
      </div>

      <div className="dashboard-grid" aria-label="Lista de linhas monitoradas">
        {linhas.map((linha) => (
          <BusCard key={linha.id} linha={linha} />
        ))}
      </div>
    </section>
  );
}
