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
import User from "./User";

export default function List() {
  const [list, setList] = React.useState([]);

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
            <Grid container item xs={3} maxWidth="sm"  key={item.id}>
              <Card sx={{ maxWidth: 350 }}>
                <Grid container>
                  <Grid item xs={9}>
                    <User userId = {item.userId}/> 
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
                <Action postId={item.id}/>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
