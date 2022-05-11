import { useState } from "react";
import Board from "./Board";
import Button from "./Button";
import "./App.css";
import logo from "./assets/logo.png";

function random(n) {
  return Math.ceil(Math.random() * n);
}
const App = () => {
  const [myHistory, setMyHistroy] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistroy([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistroy([]);
    setOtherHistory([]);
  };

  return (
    <div className="App">
      <div>
        <img src={logo} alt="logo" />
        <h1 className="App-title">주사위게임</h1>
      </div>
      <div>
        <Button
          className="Button blue App-button"
          color="blue"
          onClick={handleRollClick}
        >
          던지기
        </Button>
        <Button
          className="Button red App-button"
          color="red"
          onClick={handleClearClick}
        >
          처음부터
        </Button>
      </div>
      <div className="app-boards">
        <Board color="red" name="유저" gameHistory={myHistory} />
        <Board color="blue" name="상대" gameHistory={otherHistory} />
      </div>
    </div>
  );
};

export default App;
