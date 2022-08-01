import { Box, Button, Modal, TextareaAutosize, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "60vh",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 20,
  p: 4,
  outline: "none",
};

export default function Header({ add }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    add(e.target.body.value, e.target.title.value);
    e.target.title.value = "";
    e.target.body.value = "";
  };
  return (
    <div>
      <header>
        <Container>
          <ul>
            <li>
              <Button variant="text" href="/">Home</Button>
            </li>
            <li>
              <Button onClick={handleOpen} variant="text">
                Add
              </Button>
            </li>
          </ul>
        </Container>
      </header>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box container sx={style}>
          <form onSubmit={handleSubmit}>
            <TextField
              placeholder="Title"
              name="title"
              variant="standard"
              style={{ width: "100%", border: "none" }}
            />
            <TextareaAutosize
              style={{ width: "100%", border: "none" }}
              aria-label="minimum height"
              minRows={25}
              placeholder="Body"
              name="body"
            />
            <Button type="submit" onSubmit={handleSubmit} variant="contained">
              Add
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
