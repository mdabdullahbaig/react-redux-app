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
