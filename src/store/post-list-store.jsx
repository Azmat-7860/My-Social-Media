import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useReducer } from "react";

export const ContextPostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
    console.log(newPostList);
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = [...currPostList, ...action.payload.posts];
  } else if (action.type === "DELETE_POST") {
    newPostList = [...currPostList];
    newPostList.splice(action.payload.postId, 1);
  }

  return newPostList;
};

export const PostListProvider = ({ children }) => {
  let [postList, dispatch] = useReducer(postReducer, []);

  const addPost = (post) => {
    dispatch({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    dispatch({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const addInitialPost = (posts) => {
    dispatch({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        // console.log(obj);

        addInitialPost(obj.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <ContextPostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </ContextPostList.Provider>
  );
};
