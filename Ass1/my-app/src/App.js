import React, { useState } from 'react';
import Timer from './Timer';
import './App.css'

const App = () => {
  const [isBreak, setIsBreak] = useState(false);

  const handleWorkSessionComplete = () => {
    setIsBreak(true); // Switch to break session
  };

  const handleBreakSessionComplete = () => {
    setIsBreak(false); // Switch back to work session
  };

  return (
    <div className="App">
      <h1>Pomodoro Timer App</h1>
      {isBreak ? (
        <Timer initialMinutes={5} initialSeconds={0} onTimerComplete={handleBreakSessionComplete} />
      ) : (
        <Timer initialMinutes={25} initialSeconds={0} onTimerComplete={handleWorkSessionComplete} />
      )}
    </div>
  );
};

export default App;
