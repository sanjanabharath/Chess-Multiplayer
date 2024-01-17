import React, { useState, useRef, useEffect } from "react";
import { Chess } from "chess.js";
import { createBoard } from "../functions";
import Board from "./Board";

const FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const Game = () => {
  const [fen, setFen] = useState(FEN);
  const { current: chess } = useRef(new Chess(fen));
  const [board, setBoard] = useState(createBoard(fen));

  useEffect(() => {
    setBoard(createBoard(fen));
  }, [fen]);
  return (
    <div>
      <Board cells={board} />
    </div>
  );
};

export default Game;
