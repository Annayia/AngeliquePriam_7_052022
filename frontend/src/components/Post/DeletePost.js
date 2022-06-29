import axios from "axios";
import React from "react";
import { BsTrash } from "react-icons/bs";

const DeletePost = ({ post }) => {
  const token = sessionStorage.getItem("token");
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/api/post/${post.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.reload();
  };
  return (
    <button aria-label="supprimer">
      <BsTrash className="text-lg" onClick={handleDelete} />
    </button>
  );
};

export default DeletePost;
