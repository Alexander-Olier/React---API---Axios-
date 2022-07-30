import React, { useEffect, useState } from "react";
import Axios from "axios";
import { CardActions, IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

export default function Action() {
  const [cant, setCant] = useState(0);
  const [list, setList] = React.useState([]);
  useEffect(() => {
    Axios({
      url: "https://jsonplaceholder.typicode.com/comments",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);

  const cont = () => {
    var i =0;
   for(i in list){
    console.log("soy", i)
   }
  };
  return (
    <div className="">
      <CardActions disableSpacing>
        <IconButton aria-label="Love">
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton aria-label="Comment">
          <ModeCommentOutlinedIcon />
        </IconButton>
      </CardActions>
    </div>
  );
}
