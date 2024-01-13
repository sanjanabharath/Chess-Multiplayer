import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const CopyText = ({ open, setOpen }) => {
  let text = "Hello";

  const handleClose = () => {
    setOpen(false);
  };

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
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
          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel></InputLabel>
            <Input
              id="text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={copyContent} edge="end">
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              }
              readOnly="true"
              defaultValue={text}
              style={{ width: "400px" }}
            />
          </FormControl>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CopyText;
