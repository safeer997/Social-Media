import { createContext, useReducer,useEffect, useState } from "react";

export const PostListContext = createContext({});

const reducerFunction = (currentState, action) => {
  let newState = currentState;
  if (action.type === "DELETE_POST") {
    newState = currentState.filter((post) => post.id !== action.payload.id);
    return newState;
  } else if (action.type === "CREATE_POST") {
    newState = [action.payload.postToServer, ...currentState];
    return newState;
  } else if (action.type === "ADD_POST_SERVER") {
    newState = action.payload.apiPosts;
  }
  return newState;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(reducerFunction, []);
  

  const deletePost = (postIdToBeDeleted) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id: postIdToBeDeleted,
      },
    });
  };

  const createPost = (postToServer) => {
    dispatchPostList({
      type: "CREATE_POST",
      payload: {
       postToServer:postToServer
      },
    });
  };

  const addPostFromServer = (apiPosts) => {
    dispatchPostList({
      type: "ADD_POST_SERVER",
      payload: {
        apiPosts: apiPosts,
      },
    });
  };

 

 
  return (
    <PostListContext.Provider
      value={{
        postList: postList,
        deletePost: deletePost,
        createPost: createPost,
       
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};
export default PostListProvider;
