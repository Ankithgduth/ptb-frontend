import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

import Nifty from './pages/Nifty';
import PnL from './pages/PnL';
import ML from './pages/ML';
import Holdings from './pages/Holdings';

// Keep these placeholders until Copilot and Equity pages are shared
import Equity from './pages/Equity';
import Copilot from './pages/Copilot';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Topbar />
        <div className="main-layout">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Nifty />} />
              <Route path="/pnl" element={<PnL />} />
              <Route path="/ml" element={<ML />} />
              <Route path="/holdings" element={<Holdings />} />
              <Route path="/equity" element={<Equity />} />
              <Route path="/copilot" element={<Copilot />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
