import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import Spinner from "./Spinner";

const PostList = () => {
  const { postList, fetching } = useContext(PostListContext);

  return (
    <>
      {fetching && <Spinner></Spinner>}
      {!fetching && postList.length === 0 && <WelcomeMsg></WelcomeMsg>}
      {!fetching &&
        postList.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            body={post.body}
            reactions={post.reactions}
            tags={post.tags}
            id={post.id}
          ></Post>
        ))}
    </>
  );
};
export default PostList;
