import React from "react";
import logo from "../assets/logo-new.svg";
import { Button, Typography } from "@mui/material";

const Appbar = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          src={logo}
          alt="logo-img"
          style={{ width: "40px", color: "#a200ff" }}
        />
        <Typography
          variant="h5"
          style={{
            fontWeight: "bold",
            margin: "10px auto auto 10px",
            color: "white",
            fontFamily: "Open sans",
          }}
        >
          Chess Multiplayer
        </Typography>
        <Button
          variant="contained"
          style={{
            margin: "auto 8px",
            backgroundColor: "#a200ff",
            fontFamily: "Open sans",
          }}
        >
          Signup
        </Button>
        <Button
          variant="outlined"
          style={{
            margin: "auto 8px",
            color: "#a200ff",
            borderColor: "#a200ff",
            fontFamily: "Open sans",
          }}
        >
          Signin
        </Button>
      </div>
    </div>
  );
};

export default Appbar;
