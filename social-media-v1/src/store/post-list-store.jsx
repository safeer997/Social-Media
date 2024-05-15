import { createContext, useReducer } from "react";

export const PostListContext = createContext({});

const reducerFunction = (currentState, action) => {
  let newState = currentState;
  if (action.type === "DELETE_POST") {
    newState = currentState.filter((post) => post.id !== action.payload.id);
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
    // console.log(postIdtobedeleted+" deleted");
  };

  const addPost = () => {};

  return (
    <PostListContext.Provider
      value={{ postList: postList, deletePost: deletePost, addPost: addPost }}
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
    body: "21st century is the era of artificial intelligence",
    reactions: "12",
    userId: "user-3",
    tags: ["robot", "ai", "future"],
  },
  {
    id: "2",
    title: "Exploring the Future with AI",
    body: "Join us in exploring the possibilities of AI in shaping our future.",
    reactions: "35",
    userId: "user-5",
    tags: ["future", "ai", "technology"],
  },
  {
    id: "3",
    title: "Robots and Humanity",
    body: "Let's discuss the impact of robotics on society and ethics.",
    reactions: "45",
    userId: "user-7",
    tags: ["robot", "future", "ethics"],
  },
];
