import {
  Alert,
  Box,
  Grid,
  Modal,
  Snackbar,
} from "@mui/material";
import { Container } from "@mui/system";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import List from "../component/List";
import ModalPost from "../component/ModalPost";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "80vh",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
};
export default function Home() {
  
  const [activeAdd, setActiveAdd] = useState(false);
  const [activeUp, setActiveUp] = useState(false);
  const [activeDel, setActiveDel] = useState(false);


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
    setActiveAdd(false)
    setActiveUp(false)
    setActiveDel(false)
    setIsClicked([]);
  };

  useEffect(() => {
    listPost();
  }, []);

  const listPost = async () => {
    await Axios({
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => {
        setList(response.data);
        console.log(list);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const add = async (title, body) => {
    Axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: JSON.stringify({
        title: title,
        body: body,
        userId: 10,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => {
      if (response) {
        console.log(response.data);
        setList((list) => [...list, response.data]);
        setActiveAdd(true)
        return;
      } else {
        return response.json;
      }
    });
  };
  const onUpdate = async (title, body, id) => {
    await Axios({
      method: "put",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      data: JSON.stringify({
        title: title,
        body: body,
        id: id,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setList(
            list.map((listOne) => {
              return listOne.id === id ? { ...res.data } : listOne;
            })
          );
          setActiveUp(true)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onDelete = async (id) => {
    await Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setList(
            list.filter((list) => {
              return list.id !== id;
            })
          );
          setActiveDel(true)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Header add={add} />
      <Container sx={{ pt: 12 }}>
        <Grid container spacing={2}>
          {list.map((item, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} maxWidth="sm">
              <List
                item={item}
                handleOpen={handleOpen}
                onDelete={onDelete}
                onUpdate={onUpdate}
              ></List>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalPost
            id={`${isClicked.id}`}
            item={isClicked}
          ></ModalPost>
        </Box>
      </Modal>
      <Snackbar open={activeAdd} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">Se ha guardado correctamente</Alert>
      </Snackbar>
      <Snackbar open={activeUp} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">Se ha actualizado correctamente</Alert>
      </Snackbar>
      <Snackbar open={activeDel} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">Se ha eliminado correctamente</Alert>
      </Snackbar>
    </div>
  );
}
