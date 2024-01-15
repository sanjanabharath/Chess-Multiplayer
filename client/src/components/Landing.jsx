import React from "react";
import { Button, Typography, Grid } from "@mui/material";
import image from "../assets/landing-image.jpg";

const Landing = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Grid container style={{ margin: "50px auto auto 50px" }}>
        <Grid item xs={12} lg={7} style={{ marginTop: "150px" }}>
          <div>
            <Typography
              variant="h3"
              style={{
                fontWeight: "bold",
                color: "white",
                fontFamily: "Open sans",
              }}
            >
              Master the Board, Conquer the Mind
            </Typography>
            <Typography
              variant="h6"
              style={{
                color: "white",
                fontFamily: "Open sans",
                margin: "10px auto",
              }}
            >
              Unleash Your Strategic Brilliance in the Ultimate Chess Challenge!
            </Typography>
            <Button
              variant="contained"
              style={{
                margin: "18px auto",
                backgroundColor: "#a200ff",
                fontFamily: "Open sans",
                borderRadius: "10px",
              }}
            >
              Play For Free
            </Button>
            <Button
              variant="contained"
              style={{
                margin: "18px 5px",
                backgroundColor: "#a200ff",
                fontFamily: "Open sans",
                borderRadius: "10px",
              }}
            >
              Create Room
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div>
            <img
              src={image}
              alt="landing-image"
              style={{
                width: "500px",
                margin: "50px 10px",
                borderRadius: "10px",
              }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
