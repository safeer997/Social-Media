import { createContext, useReducer, useState } from "react";

export const PostListContext = createContext({});

const reducerFunction = (currentState, action) => {
  let newState = currentState;
  if (action.type === "DELETE_POST") {
    newState = currentState.filter((post) => post.id !== action.payload.id);
    return newState;
  } else if (action.type === "CREATE_POST") {
    newState = [
      ...currentState,
      {
        id: "1",
        title: action.payload.title,
        body: "21st century is the era of artificial intelligence ",
        reactions: "12",
        userId: "user-3",
        tags: ["robot", "ai", "future"],
      },
    ];

    return newState;
  }
  return newState;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    reducerFunction,
    DEFAULT_POST_LIST
  );

  const deletePost = (postIdToBeDeleted) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id: postIdToBeDeleted,
      },
    });
  };

  const createPost = (userPost) => {
    dispatchPostList({
      type: "CREATE_POST",
      payload: {
        title: userPost,
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

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "This is a robot speaking",
    body: "In the 21st century, artificial intelligence is revolutionizing every aspect of our lives.",
    reactions: "12",
    userId: "user-3",
    tags: ["robot", "ai", "future"],
  },
  {
    id: "2",
    title: "Exploring the Future with AI",
    body: "Join us in exploring the possibilities of AI in shaping our future. From self-driving cars to personalized medicine, the potential is limitless!",
    reactions: "35",
    userId: "user-5",
    tags: ["future", "ai", "technology"],
  },
  {
    id: "3",
    title: "Robots and Humanity",
    body: "Let's discuss the impact of robotics on society and ethics. As robots become more integrated into our daily lives, it raises important questions about ethics and human identity.",
    reactions: "45",
    userId: "user-7",
    tags: ["robot", "future", "ethics"],
  },
];

