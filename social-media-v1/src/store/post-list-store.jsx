import { createContext } from "react";

export const PostList = createContext({});

const PostListProvider = ({ children }) => {
  return <PostList.Provider>{children}</PostList.Provider>;
};
export default PostListProvider;


