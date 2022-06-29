import React from "react";
import axios from "axios";
import { useContext, useState } from "react";
import { UserIdContext } from "../AppContext";

const FormComments = ({ post }) => {
  const [content, SetContent] = useState("");
  const user = useContext(UserIdContext);
  const token = sessionStorage.getItem("token");
  const commentData = {
    author: user.pseudo,
    content: content,
  };
  const handleComment = (e) => {
    axios
      .post(`http://localhost:3000/api/comment/${post.id}`, commentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form action="" onSubmit={handleComment} id="form_comment">
        <label htmlFor="comment"></label>
        <br />
        <input
          type="text"
          name="comment"
          id="commentaire"
          onChange={(e) => SetContent(e.target.value)}
          value={content}
        />
        <input type="submit" value="Poster" className="button" />
      </form>
    </div>
  );
};

export default FormComments;
