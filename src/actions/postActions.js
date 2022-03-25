import axios from "axios";
import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPost = () => async (dispatch) => {
  const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const posts = result.data;

  dispatch({
    type: FETCH_POSTS,
    payload: posts,
  });
};

export const createPost = (body) => async (dispatch) => {
  const result = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    body
    // { headers: { "content-type": "application/json" } }
  );

  const post = result.data;

  dispatch({
    type: NEW_POST,
    payload: post,
  });
};
