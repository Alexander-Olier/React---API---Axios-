import { Box, Button, Modal } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height:"60vh",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline:"none"
};


export default function Header({add}) {
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
              <Button variant="text">Home</Button>
            </li>
            <li>
            <Button onClick={handleOpen} variant="text">Add</Button>            </li>
          </ul>
        </Container>
      </header>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <form onSubmit={handleSubmit}>
        <input placeholder="Title" name="title" />
        <input placeholder="Body" name="body" />
        <button onSubmit={handleSubmit}>Add</button>
      </form>
        </Box>
      </Modal>
    </div>
  );
}
