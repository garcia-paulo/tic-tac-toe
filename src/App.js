import './App.css';
import { useState, useEffect } from "react";
import * as Square from "./Components/Square"
import { Patterns } from "./Patterns"

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X")
  const [result, setResult] = useState({ winner: "", state: "" })
  const [placarX, setPlacarX] = useState(0);
  const [placarO, setPlacarO] = useState(0);
  const winsO = 0;

  useEffect(() => {
    checkWin();
    checkTie();
  }, [board])

  useEffect(() => {
    if (result.state != "") {
      switch (result.winner) {
        case "X":
          alert("Game finished! Winning Player: O");
          setPlacarO(placarO + 1);
          break;
        case "O":
          alert("Game finished! Winning Player: X");
          setPlacarX(placarX + 1);
          break;
        case "":
          alert("Game finished! It's a tie!");
          break;
      }
      restart();
    }
  }, [result])

  const checkWin = () => {
    Patterns.forEach((current) => {
      const firstPlayer = board[current[0]];
      if (firstPlayer == "") return;
      let foundWinningPattern = true
      current.forEach((idx) => {
        if (board[idx] != firstPlayer) {
          foundWinningPattern = false
        }
      })

      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" })
      }
    })
  }

  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square == "") {
        filled = false;
      }
    })

    if (filled) {
      setResult({ winner: "", state: "tie" })
    }
  }

  const chooseSquare = (square) => {
    setBoard(board.map((val, idx) => {
      if (idx == square && val == "") {
        if (player == "X") {
          setPlayer("O");
        } else {
          setPlayer("X")
        }
        return player
      }
      return val;
    }))
  }

  const restart = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
  }

  return (
    <div className="Centro">
      <div>
        X <p />
        {placarX}
      </div>
      <div className="App">
        Vez de: {player} <p />
        <div className="board">
          <div className="row">
            <Square.s0 val={board[0]} chooseSquare={() => { chooseSquare(0) }} />
            <Square.s1 val={board[1]} chooseSquare={() => { chooseSquare(1) }} />
            <Square.s2 val={board[2]} chooseSquare={() => { chooseSquare(2) }} />
          </div>
          <div className="row">
            <Square.s3 val={board[3]} chooseSquare={() => { chooseSquare(3) }} />
            <Square.s4 val={board[4]} chooseSquare={() => { chooseSquare(4) }} />
            <Square.s5 val={board[5]} chooseSquare={() => { chooseSquare(5) }} />
          </div>
          <div className="row">
            <Square.s6 val={board[6]} chooseSquare={() => { chooseSquare(6) }} />
            <Square.s7 val={board[7]} chooseSquare={() => { chooseSquare(7) }} />
            <Square.s8 val={board[8]} chooseSquare={() => { chooseSquare(8) }} />
          </div>
        </div>
        <button onClick={restart}>REINICIAR</button>
      </div>
      <div>
        O <p />
        {placarO}
      </div>
    </div>
  );
}

export default App;
