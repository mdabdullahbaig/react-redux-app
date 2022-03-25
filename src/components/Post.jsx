import { useState, useEffect } from "react";
import axios from "axios";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const data = res.data;
      console.log(data);

      setPosts(data);
    };

    getPosts();
  }, []);
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.id}. {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;
