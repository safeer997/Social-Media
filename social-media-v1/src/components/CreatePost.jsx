import { useRef } from "react";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = ({ setSelectedTab }) => {
  const createPostInput = useRef(null);

  const { createPost } = useContext(PostListContext);

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          ref={createPostInput}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          Happy Posting
        </div>
      </div>
      <button
        onClick={() => {
          createPost(createPostInput.current.value);
          setSelectedTab("Home");
        }}
        type="button"
        className="btn btn-success"
      >
        Create Post
      </button>
    </form>
  );
};
export default CreatePost;
