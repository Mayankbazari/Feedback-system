import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

export const Post = ({ post, excerpt }) => (
  <div className={excerpt ? "post-excerpt" : "posts"}>
    {/* <div className="post">  */}
    <div className="author">
      <p>Roushan sinha ,web Developer</p>
      <p> posted a minute ago</p>
    </div>
    <h2>{post.title}</h2>
    <div className="role">Data Scientis, Google, Maachine learning</div>
    <p>{excerpt ? post.body.substring(0, 100) : post.body}</p>
    {/* <h2>{post.title}</h2> */}
    {/* <p>{excerpt ? post.body.substring(0, 100) : post.body}</p> */}

    {excerpt && (
      <Link to={`/posts/${post.id}`} className="button">
        View Post
      </Link>
    )}
    <div className="commentSection">
      <input type="text-area" placeholder="Add comments here " />
      <button>Add</button>
    </div>
  </div>
  // </div>
);
