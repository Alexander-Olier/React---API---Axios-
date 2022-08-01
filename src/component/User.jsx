import { Avatar, CardHeader } from '@mui/material'
import { red } from '@mui/material/colors'
import  Axios  from 'axios';
import React, { useEffect } from 'react'

export default function User({userId}) {
    const [cant, setCant] = React.useState(0);
    const [list, setList] = React.useState([]);
    useEffect(() => {
      Axios({
        url: `https://jsonplaceholder.typicode.com/users/${userId}`,
    })
        .then((response) => {
            setList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [setList]);
  return (
    <div> <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
       R
      </Avatar>
    }
    title={list.username}
  /></div>
  )
}
