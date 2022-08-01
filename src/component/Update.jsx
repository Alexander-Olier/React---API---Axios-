import {
  Button,
  Container,
  MenuItem,
  Modal,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "70vh",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

export default function Update({item, onUpdate}) {
  const [title, setTitle] = useState("");
  const[body, setBody] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const onTitleChange = (e) => setTitle(e.target.value);
  const onBodyChange = (e) => setBody(e.target.value);
  useEffect(()=>{
   addDatos()
  }, [])
  const addDatos = () =>{
    setTitle(item.title)
    setBody(item.body)
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    onUpdate( e.target.title.value, e.target.body.value, item.id);
    e.target.title.value = "";
    e.target.body.value = "";
    handleClose();
  };

  return (
    <div>
      <MenuItem>
        <Button onClick={handleOpen} variant="text">
          Update
        </Button>
      </MenuItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box container sx={style}>
          <Container>
          <form onSubmit={handleSubmit}>
            <TextField
              placeholder="Title"
              name="title"
              variant="standard"
              style={{ width: "100%", border: "none" }}
              value={title}
              onChange={onTitleChange}
            />
            <TextareaAutosize
              style={{ width: "100%", border: "none", background:"#fff" }}
              aria-label="minimum height"
              minRows={25}
              placeholder="Body"
              name="body"
              value={body}
              onChange={onBodyChange}
            />
            <Button type="submit" onSubmit={handleSubmit} variant="contained">
              update
            </Button>
          </form>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
