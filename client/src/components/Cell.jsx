import React from "react";
import PropTypes from "prop-types";
import "../styles/cell.css";
import Piece from "./Piece";
import { isLightStyle, Cell as BoardCell } from "../functions/";

const Cell = ({ cell, index }) => {
  const light = isLightStyle(cell, index);
  return (
    <div className={`cell ${light ? "light" : "dark"}`}>
      <Piece pos={cell.pos} name={cell.piece} />
    </div>
  );
};

Cell.prototype = {
  cell: PropTypes.instanceOf(BoardCell).isRequired,
  index: PropTypes.number.isRequired,
};

export default Cell;
