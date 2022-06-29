import React from "react";
import { BsTrash } from "react-icons/bs";
import axios from "axios";

const DeleteUser = ({ user }) => {
  const token = sessionStorage.getItem("token");
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/api/users/${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    window.location.reload();
  };
  return (
    <div>
      <BsTrash onClick={handleDelete} />
    </div>
  );
};

export default DeleteUser;
