import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";
import { MdDelete } from "react-icons/md";
import { FcLike } from "react-icons/fc";

const Post = ({ title, body, reactions, tags, id }) => {
  const { deletePost } = useContext(PostListContext);

  return (
    <div className="card" style={{ width: "30rem", margin: "20px 10px" }}>
      <span
        onClick={() => deletePost(id)}
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      >
        <MdDelete />
      </span>
      <div className="card-body">
        <div></div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>

        <div className="hashtag-Container">
          {tags.map((tag) => (
            <span
              className="alert alert-primary hashtag"
              style={{ padding: "5px" }}
            >
              {tag}
            </span>
          ))}
        </div>
        <button type="button" className="btn btn-success position-relative" style={{ padding: "2px 10px 2px 10px" }}>
          <FcLike />
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
            {reactions}
          </span>
        </button>
      </div>
    </div>
  );
};
export default Post;
