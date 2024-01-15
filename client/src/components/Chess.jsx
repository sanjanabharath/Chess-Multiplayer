import React from "react";
import { Card, Typography } from "@mui/material";
import chessBoard from "../assets/chess/chessboard.svg";

const Chess = () => {
  return (
    <div>
      <diV style={{ display: "flex", justifyContent: "center" }}>
        <Card
          variant="outlined"
          style={{
            width: "200px",
            backgroundColor: "#a200ff",
            margin: " auto 10px",
          }}
        >
          <Typography
            variant="h5"
            style={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "Open sans",
              paddingLeft: "60px",
              paddingTop: "20px",
              height: "50px",
            }}
          >
            Player 1
          </Typography>
        </Card>
        <Card
          variant="outlined"
          style={{
            width: "200px",
            backgroundColor: "#a200ff",
            margin: " auto 10px",
          }}
        >
          <Typography
            variant="h5"
            style={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "Open sans",
              paddingLeft: "50px",
              paddingTop: "20px",
              height: "50px",
            }}
          >
            Player 2
          </Typography>
        </Card>
      </diV>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <img src={chessBoard} alt="chess-board" />
      </div>
    </div>
  );
};

export default Chess;
