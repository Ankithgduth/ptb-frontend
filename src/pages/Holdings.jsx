import React from 'react';

export default function Holdings() {
  return (
    <div>
      <h2>Equity Holdings</h2>
      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Buy Price</th>
            <th>Current Price</th>
            <th>Growth (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>INFY</td><td>20</td><td>₹1345</td><td>₹1432</td><td style={{color:'green'}}>+6.4%</td></tr>
          <tr><td>HDFCBANK</td><td>15</td><td>₹1550</td><td>₹1490</td><td style={{color:'red'}}>-3.9%</td></tr>
        </tbody>
      </table>
    </div>
  );
}