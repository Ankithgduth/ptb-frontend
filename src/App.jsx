import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';

function Dashboard() {
  return <h2>📈 Live Trade View (Coming Soon)</h2>;
}
function PnL() {
  return <h2>💰 P&L Report</h2>;
}
function ML() {
  return <h2>🧠 ML Performance</h2>;
}
function Equity() {
  return <h2>📊 Equity Engine</h2>;
}
function Settings() {
  return <h2>⚙️ Settings</h2>;
}

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ marginLeft: '220px', padding: '20px', color: 'white' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pnl" element={<PnL />} />
            <Route path="/ml" element={<ML />} />
            <Route path="/equity" element={<Equity />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
