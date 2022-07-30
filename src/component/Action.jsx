import React, { useEffect, useState } from "react";
import Axios from "axios";
import { CardActions, IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

export default function Action({postId}) {
  const [cant, setCant] = useState(0);
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
  }, [setList]);
  return (
    <div className="">
      <CardActions disableSpacing>
        <IconButton aria-label="Love">
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton aria-label="Comment">
          <ModeCommentOutlinedIcon />{list.length}
        </IconButton>
      </CardActions>
    </div>
  );
}
