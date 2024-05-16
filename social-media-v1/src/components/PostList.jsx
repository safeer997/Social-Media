import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} reactions={post.reactions}  tags={post.tags} id={post.id}></Post>
      ))}
    </>
  );
};
export default PostList;
