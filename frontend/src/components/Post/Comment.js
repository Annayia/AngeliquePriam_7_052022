import React from "react";

const Comment = ({ comment }) => {
  return (
    <div
      className="comment flex gap-xs
    text-xs mt-4 bg-white backdrop-brightness-200 p-xs border text-red rounded-rounded"
    >
      <p className="font-bold">{comment.author}:</p>
      <p>{comment.content}</p>
    </div>
  );
};

export default Comment;
