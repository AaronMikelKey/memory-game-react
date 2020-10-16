import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Card from './components/card';
import winOrLose from './components/WinOrLose'

const App = () => {
  const [game, setGame] = useState(0);
  const [arr, setArr] = useState([]);
  const [score, setScore] = useState(0);
  const [winState, setWinState] = useState(true);

  const gameMode = (e) => {
    setGame(e.target.id)
  }

  useEffect(() => {
    console.log('Arr', arr);
  }, [arr]);
  useEffect(() => {
    console.log('score', score);
  }, [score]);

  const checkClicked = (e) => {
    console.log(game);
    let index = arr.indexOf(e.target.id);
    let index2 = arr.indexOf(e.target.parentNode.id);
    if (index === -1 && index2 === -1) {
      if (e.target.id) {
        setArr([...arr, e.target.id]);
      } else {
        setArr([...arr, e.target.parentNode.id]);
      };
      setScore(score + 1);
      console.log(score);
    } else {
      setWinState(false);
    }
    winOrLose(score, game, winState);
  }

  if (game === 0) {
    return (
      <div className="buttons">
        <button id="12" onClick={gameMode}>Play with 12 cards</button>
        <button id="24" onClick={gameMode}>Play with 24 cards</button>
        <button id="36" onClick={gameMode}>Play with 36 cards</button>
        <button id="50" onClick={gameMode}>Play with 50 cards</button>
      </div>
    )
  } else {

    return (
      <div className="App">
        <Card click={checkClicked} mode={game} />
      </div>
    );
  }
}

export default App;
