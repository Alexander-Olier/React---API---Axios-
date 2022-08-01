import { Box, Grid, Typography } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import React, { useEffect } from "react";
import Axios from "axios";

export default function Comments({ postId }) {
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
  });
  return (
    <div>
      <Grid
        container
        sx={{ maxHeight: "50vh", overflowY: "auto", overflowX: "hidden" }}
      >
        {list.map((item) => (
          <Box sx={{ m: 2 }}>
            <div className="user">
              <PersonOutlinedIcon />
              <Typography variant="caption">{item.email}</Typography>
            </div>
            <br />
            <Typography variant="caption" sx={{ color: "#555" }}>
              {item.body}
            </Typography>
          </Box>
        ))}
      </Grid>
    </div>
  );
}
