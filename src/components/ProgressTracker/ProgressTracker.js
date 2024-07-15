import React from 'react';
import './ProgressTracker.css';

const ProgressTracker = ({ goal, current }) => {
  const percentage = (current / goal) * 100;

  return (
    <div className="progress-tracker">
      <h2>Our Progress</h2>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
      <p>{current} lbs / {goal} lbs</p>
    </div>
  );
};
export default ProgressTracker;