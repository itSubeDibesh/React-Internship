/* eslint-disable default-case */
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const
    [initialClick, setInitialClick] = useState(false),
    [gameEnd, setGameEnd] = useState(false),
    [timer, setTimer] = useState({
      seconds: 3e4,
      value: "30 sec"
    }),
    [score, setScore] = useState(0),
    [start, setStart] = useState(false)
    ;

  // Effects Hook
  useEffect(() => {
    if (start)
      setTimeout(() => {
        if (timer.seconds === 0) {
          setStart(false);
          setGameEnd(true);
        }
        setTimer({
          seconds: timer.seconds - 1e3,
          value: `${Math.floor(timer.seconds / 1e3)} sec`
        }); // 1e3 === 1000
      }, 1e3)
  }, [start, timer])

  // Initiating Timer
  function gameStart() {
    // setStart(true);
    if (!initialClick) {
      setInitialClick(true);
      setStart(true);
    } else {
      setScore(score + 1e2);
    }
  }

  function resetGame() {
    setStart(false);
    setInitialClick(false);
    setGameEnd(false)
    setScore(0);
    setTimer({
      seconds: 3e4,
      value: "30 sec"
    })
  }

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <div className='card-header text-center'>
              Time Game ⌚
            </div>
            <div className='card-body'>
              <p>
                <strong> Hi there, are you ready to play?</strong>
              </p>
              It's simple, just click the <b>"Click Me"</b> button and score as you go.
              <div className="score">
                <strong className="text-primary">Score: {score}</strong>
              </div>
              <div className="timer mb-3">
                <strong className="text-danger">Time Left: {timer.value}</strong>
              </div>
              <button className="btn btn-success" onClick={gameStart} disabled={gameEnd}>Click Me</button>
              <button className="btn btn-danger" onClick={resetGame}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;

