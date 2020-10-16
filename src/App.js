import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Card from './components/card';
import winOrLose from './components/WinOrLose';
import { Header, Footer } from './components/Sandwich.js'

const App = () => {
  const [game, setGame] = useState(null);
  const [arr, setArr] = useState([]);
  const [score, setScore] = useState(0);

  const gameMode = (e) => {
    setGame(e.target.id)
  }

  useEffect(() => {
    setTimeout(50);
  }, [arr]);
  useEffect(() => {
    setTimeout(50);
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
      setScore(previousScore => previousScore + 1 );
    } else {
      alert("You lose");
      setGame(null);

  }
    winOrLose(score, game);
  }

  if (game === null) {
    return (
      <div className="App">
        <Header />
      <div className="dogs" >
        <div className="buttons">
          <button id="12" onClick={gameMode}>Play with 12 cards</button>
          <button id="24" onClick={gameMode}>Play with 24 cards</button>
          <button id="36" onClick={gameMode}>Play with 36 cards</button>
          <button id="50" onClick={gameMode}>Play with 50 cards</button>
          <div className="info" >Choose how many cards to play with and then click each dog breed ONLY one time.  Once you have clicked them all you win and can select another mode to play.</div>
        </div>
      </div>
        <Footer />
      </div>
    )
  } else {

    return (
      <div className="App">
        <Header />
        <Card click={checkClicked} mode={game} />
        <Footer />
      </div>
    );
  }
}

export default App;
