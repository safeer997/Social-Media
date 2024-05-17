import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import Spinner from "./Spinner";

const PostList = () => {
  const { postList, addPostFromServer } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

  // console.log("postlist component rendered");

  useEffect(() => {
    if (postList.length === 0) {
      // console.log("if block executed");
      const controller = new AbortController();
      const signal = controller.signal;

      setFetching(true);
      fetch("https://dummyjson.com/posts", { signal })
        .then((res) => res.json())
        .then((obj) => {
          addPostFromServer(obj.posts);
          setFetching(false);
        });

      return () => {
        console.log("Fetch aborted");
        controller.abort();
      };
    }
  }, []);
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
