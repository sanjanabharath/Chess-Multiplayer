import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@mui/material";
const Join = ({ open, setOpen }) => {
  let text = "Enter link";

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Here is your link"}</DialogTitle>
        <DialogContent>
          Copy this link and send it to the people you want to have a game with.
          <TextField
            id="standard-basic"
            label="Enter Link"
            variant="standard"
            style={{ marginTop: "8px", width: "400px" }}
          />
          <Button variant="text" style={{ marginTop: "26px" }}>
            Join
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Join;
