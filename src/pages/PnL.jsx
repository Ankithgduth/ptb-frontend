import React from 'react';

export default function PnL() {
  return (
    <div>
      <h2>P&L Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Trade</th>
            <th>Entry</th>
            <th>Exit</th>
            <th>P&L (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>NIFTY 23500 CE</td><td>₹85.5</td><td>₹102.7</td><td style={{color:'green'}}>+₹1710</td></tr>
          <tr><td>BANKNIFTY 51200 PE</td><td>₹115.0</td><td>₹90.0</td><td style={{color:'red'}}>-₹625</td></tr>
        </tbody>
      </table>
    </div>
  );
}