import Axios from "axios";
import React, { useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Grid } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import User from "./User";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import Update from "./Update";

export default function List({ item, handleOpen, onDelete, onUpdate }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = (id) => {
    onDelete(id);
  };
  const [list, setList] = React.useState([]);
  useEffect(() => {
    Axios({
      url: `https://jsonplaceholder.typicode.com/posts/${item.id}/comments`,
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Card sx={{ maxWidth: 350 }}>
        <Grid container>
          <Grid item xs={9}>
            <User userId={item.userId} />
          </Grid>
          <Grid item xs={3} container margin="auto">
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}><Button onClick={()=>onDelete(item.id)}>Delete{item.id}</Button></MenuItem>
              <Update item={item} onUpdate={onUpdate}/>
            </Menu>
          </Grid>
        </Grid>
        <CardContent onClick={() => handleOpen(item.id)}>
          <Typography variant="body1" color="text.primary">
            {item.title}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            {item.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button aria-label="Love">
            <FavoriteBorderOutlinedIcon fontSize="small" />
          </Button>
          <Button aria-label="Comment">
            <ModeCommentOutlinedIcon fontSize="small" />
            {list.length}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
