import { Box, DialogContent, Grid, makeStyles, Modal } from "@mui/material";
import { Container } from "@mui/system";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import List from "../component/List";
import ModalPost from "../component/ModalPost";

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
export default function Home() {
  const ref = React.createRef();

  //data
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState([]);
  //modal
  const handleOpen = (id) => {
    // setIsClicked(isClicked.push(beers.filter((item) => item.id === id)));
    setIsClicked(list.find((x) => x.id === id));
    setOpen(true);
    // console.log(isClicked[0]);
  };
  const handleClose = () => {
    setOpen(false);
    setIsClicked([]);
  };

  useEffect(() => {
    const listPost = async () => {
      Axios({
        url: "https://jsonplaceholder.typicode.com/posts",
      })
        .then((response) => {
          setList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    listPost();
  }, []);
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {list.map((item) => (
            <Grid item xs={3} maxWidth="sm">
              <List key={item.id} item={item} handleOpen={handleOpen}></List>
            </Grid>
          ))}
        </Grid>
      </Container>
      <pre>{JSON.stringify(isClicked, null, 2)}</pre>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {isClicked && (
          <Box sx={style}>
            <ModalPost
              id={`${isClicked.id}`}
              item={isClicked}
              ref={ref}
            ></ModalPost>
          </Box>
        )}
      </Modal>
    </div>
  );
}
