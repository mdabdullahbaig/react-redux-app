import axios from "axios";
import React, { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title,
      body,
    };
    console.log(data);

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      JSON.stringify(data),
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    console.log(res.data);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="body">Body:</label>
        <br />
        <input
          type="text"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
