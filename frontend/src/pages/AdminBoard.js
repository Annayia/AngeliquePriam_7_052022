import React from "react";
import { useContext, useEffect, useState } from "react";
import { PostsContext } from "../components/AppContext";
import DeletePost from "../components/Post/DeletePost";
import UpdatePost from "../components/Post/UpdatePost";
import DeleteUser from "../components/Profil/DeleteUser";
import UpdateProfil from "../components/Profil/UpdateProfil";
import { FaRegEdit } from "react-icons/fa";
import axios from "axios";

const AdminBoard = () => {
  const posts = useContext(PostsContext);
  const [hidden, setHidden] = useState("false");
  const handleToggle = () => {
    setHidden(!hidden);
  };
  const [users, SetUsers] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      axios
        .get(`http://localhost:3000/api/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          SetUsers(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <div className="w-full h-full text-dark rounded-md p-xs  gap-4 flex flex-col justify-center items-center">
      <h3 className="text-3xl text-red"> Posts </h3>
      {posts.map((post) => (
        <>
          <ul className="w-9/12 h-full flex gap-8 bg-light justify-center items-center">
            <li className="text-red font-bold">{post.author}</li>
            <li>{post.title}</li>
            <li>
              <DeletePost post={post} key={post.id} />
            </li>
            <li>
              <UpdatePost post={post} key={post[0]} />
            </li>
          </ul>
        </>
      ))}
      <h3 className="text-3xl text-red"> Utilisateurs </h3>
      {users.map((users) => (
        <>
          <ul className="w-9/12 h-full flex gap-8 bg-light justify-center items-center">
            <li className="text-red font-bold">{users.pseudo}</li>
            <li>{users.bio}</li>
            <li>
              <DeleteUser user={users} key={users.id} />
            </li>
            <FaRegEdit onClick={handleToggle} />
            <li className={hidden ? "hidden" : null}>
              <UpdateProfil />
            </li>
          </ul>
        </>
      ))}
    </div>
  );
};

export default AdminBoard;
