import React from "react";
import PropTypes from "prop-types";
import Cell from "./Cell";
import "../styles/board.css";

const Board = ({ cells }) => {
  return (
    <div className="board">
      {cells.map((cell, index) => {
        return (
          <Cell cell={cell} index={index} key={cell.pos}>
            {cell.pos}
          </Cell>
        );
      })}
    </div>
  );
};

Board.prototype = {
  cells: PropTypes.array.isRequired,
};

export default Board;
