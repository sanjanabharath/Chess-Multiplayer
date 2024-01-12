import React from "react";
import { Card, TextField, Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D7D4D4",
    },
  },
});

const Signin = () => {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "100px" }}
      >
        <Card
          variant="outlined"
          style={{
            backgroundColor: "#2e1b55",
            width: "500px",
            borderRadius: "10px",
          }}
        >
          <center>
            <Typography
              variant="h6"
              style={{
                color: "white",
                fontFamily: "Open sans",
                margin: "20px auto",
                fontWeight: "bold",
              }}
            >
              Welcome back To Chess Multiplayer.
            </Typography>
          </center>

          <div style={{ margin: "30px" }}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              color="primary"
              style={{ width: "430px" }}
              inputProps={{ style: { color: "white" } }}
              focused
            />
          </div>
          <div style={{ margin: "30px" }}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              color="primary"
              style={{ width: "430px" }}
              inputProps={{ style: { color: "white" } }}
              focused
            />
          </div>
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Button
              variant="contained"
              style={{
                margin: "auto 30px 18px 30px",
                backgroundColor: "#a200ff",
                fontFamily: "Open sans",
                borderRadius: "10px",
                color: "#FFFFFF",
              }}
            >
              Signin
            </Button>
          </div>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default Signin;
