import React from 'react';

export default function ML() {
  return (
    <div>
      <h2>ML Engine Status</h2>
      <p>Last Training: 14 June 2025, 3:00 AM</p>
      <p>Current Accuracy: 93.6%</p>
      <p>Confidence Score Threshold: 3.5</p>
      <div style={{ marginTop: '15px' }}>
        <strong>Latest Improvements:</strong>
        <ul>
          <li>Added scalping logic to training set</li>
          <li>Extended to 12 months historical Nifty + Bank Nifty data</li>
          <li>Reduced trade drift by 4%</li>
        </ul>
      </div>
    </div>
  );
}