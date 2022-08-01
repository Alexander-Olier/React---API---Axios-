import React, { useEffect } from "react";
import Axios from "axios";
import { Button, CardActions, IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

export default function Action({postId}) {
  const [list, setList] = React.useState([]);
  useEffect(() => {
    Axios({
      url: `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  })
      .then((response) => {
          setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="">
      <CardActions disableSpacing>
        <Button aria-label="Love">
          <FavoriteBorderOutlinedIcon  fontSize="small"/>
        </Button>
        <Button aria-label="Comment">
          <ModeCommentOutlinedIcon  fontSize="small" />{list.length}
        </Button>
      </CardActions>
    </div>
  );
}
