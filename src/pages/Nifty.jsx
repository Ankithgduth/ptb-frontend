import React from 'react';

export default function Nifty() {
  return (
    <div>
      <h2>Nifty Dashboard</h2>
      <iframe
        title="Nifty Chart"
        src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?symbol=NSE:NIFTY&locale=en"
        width="100%"
        height="220"
        frameBorder="0"
      ></iframe>
      <h3>Option Chain Snapshot (ATM / OTM / ITM)</h3>
      <table>
        <thead>
          <tr>
            <th>Strike</th>
            <th>Type</th>
            <th>Price</th>
            <th>% Change</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>23500</td><td>ATM</td><td>₹125.60</td><td>+3.2%</td></tr>
          <tr><td>23600</td><td>OTM</td><td>₹75.10</td><td>+1.9%</td></tr>
          <tr><td>23400</td><td>ITM</td><td>₹178.40</td><td>+4.1%</td></tr>
        </tbody>
      </table>
      <div style={{ marginTop: '20px', padding: '10px', background: '#f0f0f0', borderRadius: '4px' }}>
        <strong>Copilot Summary:</strong> Market shows bullish sentiment. Trend expected to continue post-11:30 AM.
      </div>
    </div>
  );
}