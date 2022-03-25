import { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPost } from "../actions/postAction";

const Post = ({ fetchPost, posts }) => {
  useEffect(() => {
    fetchPost();
  }, [fetchPost]);
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
};

Post.propTypes = {
  fetchPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPost })(Post);
