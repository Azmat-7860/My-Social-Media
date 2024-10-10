import { useContext, useRef } from "react";
import { ContextPostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const { addPost } = useContext(ContextPostList);
  const navigate = useNavigate();

  const userIdRef = useRef();
  const titleRef = useRef();
  const contentRef = useRef();
  const tagRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const tag = tagRef.current.value.split(",");

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        userId: 35,
        body: content,
        reactions: { likes: 0 },
        tags: tag,
      }),
    })
      .then((res) => res.json())
      .then((obj) => addPost(obj));
    // navigate("/");
  };

  return (
    <form
      className="m-5 mt-3 border border-primary  p-4"
      style={{ width: "80%" }}
      onSubmit={handleSubmit}
    >
      <div className="mb-3 ">
        <label htmlFor="userName" className="form-label">
          UserName
        </label>
        <input
          ref={userIdRef}
          type="text"
          className="form-control"
          id="userName"
          placeholder="Enter Username"
        />
      </div>

      <div className="mb-3 ">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={titleRef}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are feeling today...."
        />
      </div>

      <div className="mb-3 ">
        <label htmlFor="body" className="form-label">
          Post Contenet
        </label>
        <textarea
          ref={contentRef}
          rows={4}
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell me more about today...."
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="hashtags" className="form-label">
          Hashtags
        </label>
        <input
          ref={tagRef}
          type="text"
          className="form-control"
          id="hashtags"
          placeholder="plese enter hastags using comma(',')"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
