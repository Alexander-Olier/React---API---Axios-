import { Grid, Typography } from "@mui/material";
import React from "react";
import Comments from "./Comments";
import User from "./User";

export default function ModalPost({ item }, { ref }) {
  return (
    <div>
      <Grid container>
        <Grid item  xs={12} sm={12} lg={7} md={7} sx={{ p: 2 }} >
          <Typography variant="body1">{item.title}</Typography>
          <Typography variant="body2" sx={{ mt: 3 }}>
            {item.body}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} lg={5} md={3}>
          <User userId={item.userId}></User>
          <Comments postId={item.id}/>
        </Grid>
      </Grid>
    </div>
  );
}
