import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import AddPost from "./AddPost";

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

export default function FormModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen} variant="text">Add</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddPost />
        </Box>
      </Modal>
    </div>
  );
}
