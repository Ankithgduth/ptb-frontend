import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Nifty</Link>
      <Link to="/equity">Equity</Link>
      <Link to="/pnl">P & L</Link>
      <Link to="/ml">ML</Link>
      <Link to="/copilot">Copilot</Link>
      <Link to="/holdings">Holdings</Link>
    </div>
  );
}
