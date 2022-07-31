import { Button, TextareaAutosize, TextField } from "@mui/material";
import React, { useEffect } from "react";
import Axios from "axios";

export default function AddPost() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    add(e.target.body.value, e.target.title.value);
    e.target.title.value = "";
    e.target.body.value = "";
  };
  const add = async (title, body) => {
    Axios({
      method: "post",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((json) => console.log(json));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" name="title" />
        <input placeholder="Body" name="body" />
        <button onSubmit={handleSubmit}>Add</button>
      </form>
    </div>
  );
}
