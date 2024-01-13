import React, { useState } from "react";
import img from "../assets/chess-meeting.jpg";
import { Grid, Button, Typography } from "@mui/material";
import CopyText from "./CopyText";
import Join from "./Join";

const CreateRoom = () => {
  const [open, setOpen] = useState(false);
  const [enter, setEnter] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickEnter = () => {
    setEnter(true);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8} lg={6} style={{ margin: "180px auto auto 50px " }}>
          <Typography variant="h3" style={{ color: "white" }}>
            Checkmate the Distance
          </Typography>
          <Typography variant="h6" style={{ color: "white" }}>
            Unleash Your Inner Grandmaster, Play Chess Online with Friends!
          </Typography>
          <Button
            variant="contained"
            style={{
              margin: "18px auto",
              backgroundColor: "#a200ff",
              fontFamily: "Open sans",
              borderRadius: "10px",
            }}
            onClick={handleClickOpen}
          >
            Create Room
          </Button>
          <Button
            variant="contained"
            style={{
              margin: "18px 10px",
              backgroundColor: "#a200ff",
              fontFamily: "Open sans",
              borderRadius: "10px",
            }}
            onClick={handleClickEnter}
          >
            Join game
          </Button>
          <CopyText open={open} setOpen={setOpen} />
          <Join open={enter} setOpen={setEnter} />
        </Grid>
        <Grid item xs={5} lg={5}>
          <img
            src={img}
            alt="chess-image"
            style={{
              width: "500px",
              margin: "80px 50px 50px 50px",
              borderRadius: "10px",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateRoom;
