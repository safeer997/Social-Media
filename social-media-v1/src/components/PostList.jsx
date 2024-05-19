import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import Spinner from "./Spinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
 const postList =  useLoaderData()


  return (
    <>
      {postList.length === 0 && <WelcomeMsg></WelcomeMsg>}
      { postList.map((post) => (
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

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((obj) => {
      return obj.posts;
    });
};

export default PostList;
