import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const Post = ({ title, body, reactions, tags, id }) => {

  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card" style={{ width: "30rem", margin: "20px 10px" }}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {reactions}
      </span>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        {tags.map((tag) => (
          <span  key={tag} className="alert alert-info tags" role="alert">
            {"#" + tag}
          </span>
        ))}

        <button
          onClick={() => deletePost(id)}
          type="button"
          className="btn btn-danger"
        >
          Delete Post
        </button>
      </div>
    </div>
  );
};
export default Post;
