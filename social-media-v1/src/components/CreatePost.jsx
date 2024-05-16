import { useRef } from "react";
import { useContext } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = ({ setSelectedTab }) => {
  const userIdInputElement = useRef(null);
  const postTitleInputElement = useRef(null);
  const postBodyInputElement = useRef(null);
  const reactionsInputElement = useRef(null);
  const hashtagInputElement = useRef(null);

  const { createPost } = useContext(PostListContext);

  const handleClick = (userId, postTitle, postBody, reactions, hashtag) => {
    userId = userIdInputElement.current.value;
    postTitle = postTitleInputElement.current.value;
    postBody = postBodyInputElement.current.value;
    reactions = reactionsInputElement.current.value;
    hashtag = hashtagInputElement.current.value.split(" ");

    createPost(userId, postTitle, postBody, reactions, hashtag);
    userIdInputElement.current.value = "";
    postTitleInputElement.current.value = "";
    postBodyInputElement.current.value = "";
    reactionsInputElement.current.value = "";
    hashtagInputElement.current.value = "";
    setSelectedTab("Home");
  };

  return (
    <div className="create-post">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleClick();
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your User Id
          </label>
          <input
            ref={userIdInputElement}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="enter your user id"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post Title
          </label>
          <input
            ref={postTitleInputElement}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post
          </label>
          <textarea
            ref={postBodyInputElement}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="how are you feeling today ..."
            rows="5"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Reactions
          </label>
          <input
            ref={reactionsInputElement}
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="number of reactions"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Hashtags
          </label>
          <input
            ref={hashtagInputElement}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="enter your hashtags"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Create Post
        </button>
      </form>
    </div>
  );
};
export default CreatePost;
