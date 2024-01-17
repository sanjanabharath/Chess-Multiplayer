import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import empty from "../assets/chess-pieces/assets/pieces/empty.png";
import "../styles/piece.css";

const Piece = ({ name, pos }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const color = name === name.toUpperCase() ? "w" : "b";
        const imageName = color + name.toUpperCase();
        const imageModule = await import(
          `../assets/chess-pieces/assets/pieces/${imageName}.png`
        );
        setImage(imageModule.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, [name]);

  return image ? (
    <img src={image} alt="chess-piece" draggable={true} />
  ) : (
    <img src={empty} alt="chess-piece" draggable={true} />
  );
};

Piece.prototype = {
  name: PropTypes.string.isRequired,
  pos: PropTypes.string.isRequired,
};

export default Piece;
