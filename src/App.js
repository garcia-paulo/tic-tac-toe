import './App.css';
import { useState, useEffect } from "react";
import * as Square from "./Components/Square"
import { Patterns } from "./Patterns"
var aiLigada = 0;
var turno = 0;
var startingPlayer = "X";

function App() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState(startingPlayer)
  const [result, setResult] = useState({ winner: "", state: "" })
  const [placarX, setPlacarX] = useState(0);
  const [placarO, setPlacarO] = useState(0);

  useEffect(() => {
    checkWin();
    checkTie();

    if (player === "O") {
      turno = 1;
      setPlayer(player);
    }
  }, [board])

  useEffect(() => {
    if (result.state !== "") {
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
      setResult({ winner: "", state: "" });
    }
  }, [result])

  const checkWin = () => {
    Patterns.forEach((current) => {
      const firstPlayer = board[current[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true
      current.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false
        }
      })

      if (foundWinningPattern) {
        setResult({ winner: player, state: "won" });
        if (startingPlayer === "X"){
          startingPlayer = "O";
        } else {
          startingPlayer = "X";
        }
      }
    })
  }

  const checkTie = () => {
    let filled = true;
    for(let i = 0; i < 9; i++) {
      if (board[i] === "") {
        filled = false;
      }
    }

    if (filled) {
      setResult({ winner: "", state: "tie" })
      if (startingPlayer === "X"){
        startingPlayer = "O";
      } else {
        startingPlayer = "X";
      }
    }
  }

  const chooseSquare = (square) => {
    setBoard(board.map((val, idx) => {
      if (idx === square && val === "") {
        if (player === "X") {
          setPlayer("O");
        } else {
          setPlayer("X")
        }
        return player;
      }
      return val;
    }))
  }

  const restart = () => {
    setBoard(["", "", "", "", "", "", "", "", "", ""]);
    setPlayer(startingPlayer);
  }

  const [botaoAI, setBotaoAI] = useState("O: Jogador")

  const liga = () => {
    if (aiLigada === 0) {
      setBotaoAI("O: CPU");
      aiLigada = 1;
    } else {
      setBotaoAI("O: Jogador");
      aiLigada = 0;
    }
  }


  const ai = (position) => {
    let score = 1;
    let bestScore = 0;
    let xFound = 0;
    let oFound = 0;
    Patterns.forEach((current) => {
      current.forEach((idx) => {
        if (idx === position) {
          current.forEach((idx) => {
            if (board[idx] === "X") {
              xFound++;
            }
            if (board[idx] === "O") {
              oFound++;
            }
          })
          if (oFound === 1) {
            score = 2;
          }

          if (xFound === 1) {
            score = 0.5;
          }

          if (xFound === 2) {
            score = 8;
          }

          if (oFound === 2) {
            score = 10;
          }

          if (position === 0 ||
            position === 2 ||
            position === 6 ||
            position === 8) {
            score = score + 1;
          }

          if (position === 4) {
            score = score + 0.5;
          }

          if (board[0] === "O" && position === 8){
            console.log("teste");
            score = score + 1;
          }

          if (position === 9) {
            score = 0.3;
          }

          if (score > bestScore) {
            bestScore = score;
          }

          xFound = 0;
          oFound = 0;
        }
      })
    })
    return bestScore;
  }

  if (player === "O" && aiLigada === 1 && turno === 1 && result.state === "") {
    turno = 0;
    let score;
    let bestScore = 0;
    let bestMove;
    board.map((val, idx) => {
      if (val === "") {
        let score = ai(idx);
        if (score > bestScore) {
          bestScore = score;
          bestMove = idx;
        }
      }
    })

    setBoard(board.map((val, idx) => {
      if (idx === bestMove) {
        setPlayer("X");
        bestScore = 0;
        return player
      }
      return val;
    }))
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
        <div>
          <button className="ai" onClick={liga}>{botaoAI}</button>
          <button onClick={restart}>REINICIAR</button>
        </div>
      </div>
      <div>
        O <p />
        {placarO}
      </div>
    </div>
  );
}

export default App;
