import { useContext } from "react";
import { ContextPostList } from "../store/post-list-store";
import { PostCard } from "./Post";
import { Hero } from "./Hero";
import { Spinner } from "./LoadigSpinner";
// import { useLoaderData } from "react-router-dom";

export const PostList = () => {
  // const postList = useLoaderData();
  const { postList } = useContext(ContextPostList);

  return (
    <>
      {postList.length === 0 && <Hero />}
      {
        <div className="d-flex flex-wrap">
          {postList.map((post, index) => (
            <PostCard key={index} index={index} post={post} />
          ))}
        </div>
      }
    </>
  );
};
// export const postLoader = async () => {
//   const res = await fetch("https://dummyjson.com/posts");
//   const obj = await res.json();
//   // console.log("post from postlist", obj);
//   return obj.posts;
// };
