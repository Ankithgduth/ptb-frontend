import React from 'react';

export default function Copilot() {
  return (
    <div>
      <h2>Copilot Dashboard</h2>
      <div>
        <h3>Live Sentiment Summary</h3>
        <p>📊 Market Bias: <strong>Bullish</strong></p>
        <p>📅 Key Trigger: RBI announcement + Strong Global cues</p>
        <p>🧠 Confidence: 4.2 / 5</p>
      </div>
      <hr />
      <h3>Trade Timeline</h3>
      <ul>
        <li>🕘 09:20 AM – NIFTY 23500 CE identified as Buy (Conf: 3.9)</li>
        <li>🕙 10:45 AM – BankNifty 51200 PE rejected due to low volume</li>
        <li>🕓 02:10 PM – Equity: TCS flagged as potential breakout</li>
      </ul>
      <hr />
      <h3>Headlines Impacting Today</h3>
      <ul>
        <li>💼 "FIIs invest ₹980 Cr on signs of stable policy ahead"</li>
        <li>🌐 "S&P500 opens 0.7% higher – supports bullish outlook"</li>
        <li>📉 "VIX at 11.2 – suggests low volatility regime"</li>
      </ul>
    </div>
  );
}