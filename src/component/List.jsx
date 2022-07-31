import Axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Delete from "./Delete";
import Action from "./Action";
import User from "./User";

export default function List({ item, handleOpen }) {

  return (
    <div>
      <Card sx={{ maxWidth: 350 }} onClick={() => handleOpen(item.id)}>
        <Grid container>
          <Grid item xs={9}>
            <User userId={item.userId} />
          </Grid>
          <Grid item xs={3} container margin="auto">
            <Delete />
          </Grid>
        </Grid>
        <CardContent>
          <Typography variant="body1" color="text.primary">
            {item.title}
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            {item.body}
          </Typography>
        </CardContent>
        <Action postId={item.id} />
      </Card>
    </div>
  );
}
