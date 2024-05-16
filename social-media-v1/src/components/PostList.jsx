import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";

const PostList = () => {
  const { postList,addPostFromServer } = useContext(PostListContext);

  const handleAddPostsClick = () => {
   
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj)=>{
        // console.log(obj.posts);
        addPostFromServer(obj.posts)
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMsg handleAddPostsClick={handleAddPostsClick}></WelcomeMsg>
      )}
      {postList.map((post) => (
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
