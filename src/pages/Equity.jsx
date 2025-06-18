import React, { useState } from 'react';

const sampleSectors = ['Finance', 'IT', 'Pharma', 'Energy', 'Auto'];
const sectorStocks = {
  Finance: [{ name: 'HDFCBANK', price: 1490, change: -1.3 }, { name: 'ICICIBANK', price: 947, change: 0.8 }],
  IT: [{ name: 'INFY', price: 1432, change: 2.4 }, { name: 'TCS', price: 3685, change: 1.1 }],
  Pharma: [{ name: 'SUNPHARMA', price: 1120, change: -0.7 }, { name: 'DRREDDY', price: 5520, change: 0.5 }],
  Energy: [{ name: 'RELIANCE', price: 2785, change: 1.0 }, { name: 'ONGC', price: 181, change: -0.3 }],
  Auto: [{ name: 'TATAMOTORS', price: 925, change: 3.1 }, { name: 'BAJAJ-AUTO', price: 9010, change: 1.8 }]
};

export default function Equity() {
  const [selectedSector, setSelectedSector] = useState('Finance');

  return (
    <div>
      <h2>Equity Dashboard</h2>
      <div>
        <label>Select Sector: </label>
        <select value={selectedSector} onChange={(e) => setSelectedSector(e.target.value)}>
          {sampleSectors.map(sector => (
            <option key={sector} value={sector}>{sector}</option>
          ))}
        </select>
      </div>

      <h3>Top Stocks in {selectedSector} Sector</h3>
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Price</th>
            <th>Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {sectorStocks[selectedSector].map(stock => (
            <tr key={stock.name}>
              <td>{stock.name}</td>
              <td>₹{stock.price}</td>
              <td style={{ color: stock.change >= 0 ? 'green' : 'red' }}>
                {stock.change > 0 ? '+' : ''}{stock.change}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}