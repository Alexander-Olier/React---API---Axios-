import Axios from "axios";
import React, { useEffect } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Grid } from "@mui/material";
import Delete from "./Delete";
import Action from "./Action";
import { Container } from "@mui/system";

export default function List() {
  const [list, setList] = React.useState([]);
  useEffect(() => {
    Axios({
      url: "https://jsonplaceholder.typicode.com/posts",
    })
      .then((response) => {
        setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setList]);
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          {list.map((item) => (
            <Grid container item xs={3} maxWidth="sm">
              <Card sx={{ maxWidth: 350 }} key={item.id}>
                <Grid container>
                  <Grid item xs={9}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          R
                        </Avatar>
                      }
                      title="user"
                    />
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
                <Action />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
