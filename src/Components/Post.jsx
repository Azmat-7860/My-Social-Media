import { useContext, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { ContextPostList } from "../store/post-list-store";

export const PostCard = ({ post, index }) => {
  let [currReation, setReaction] = useState(post.reactions.likes);

  const { deletePost } = useContext(ContextPostList);
  return (
    <div className="card m-2 mt-3" style={{ width: "45%" }}>
      <div className="card-body cardBody">
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger "
          onClick={() => {
            deletePost(index);
            // console.log("dlt button is clicked");
          }}
        >
          <RiDeleteBinLine />
        </span>
        <h5 className="card-title "></h5>
        {/* <h5 className="card-title text-capitalize fw-bold">{post.userId}</h5> */}
        <h6 className="card-subtitle mb-2  text-capitalize fw-bold">
          {post.title}
        </h6>
        <p className="card-text">{post.body}</p>
        <div>
          <button
            type="button"
            className="btn btn-outline-primary py-1 px-3 mb-3 position-relative"
            onClick={() => setReaction(currReation + 1)}
          >
            Like
            <span className="position-absolute top-0 start-100 translate-middle badge  rounded-pill bg-secondary ">
              {currReation}
            </span>
          </button>
        </div>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="badge text-capitalize text-bg-warning mx-1"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};
