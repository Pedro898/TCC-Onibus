import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';

export default function AppRoutes() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Link className="brand" to="/">
          MonitorOnibus
        </Link>

        <nav className="main-nav" aria-label="Navegacao principal">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/sobre">Sobre</NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </main>
    </div>
  );
}
