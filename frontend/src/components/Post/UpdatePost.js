import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";

const UpdatePost = ({ post }) => {
  const [isUpdated, SetIsUpdated] = useState(false);
  const [textUpdate, SetTextUpdate] = useState(post.content);
  const [titleUpdate, SetTitleUpdate] = useState(post.title);
  const image = post.attachment;
  const pseudo = post.author;
  const updateItem = () => {
    const token = sessionStorage.getItem("token");
    const data = {
      title: titleUpdate,
      content: textUpdate,
      attachment: image,
      author: pseudo,
    };
    axios
      .put(`http://localhost:3000/api/post/${post.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => alert("post modifié"))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  return (
    <div>
      <Popup
        trigger={(open) => (
          <button aria-label="Modifier" className="button">
            <FaRegEdit className="text-lg" onClick={() => SetIsUpdated(true)} />
            {open ? "" : ""}
          </button>
        )}
        position="center left"
        closeOnDocumentClick
        modal
        nested
      >
        {isUpdated ? (
          <div className="update bg-dark p-4 flex flex-col  items-center text-dark h-94 w-94 rounded-xl">
            <h2 className="text-red text-5xl p-2">Modifier Post</h2>
            <h3 className="text-light text-3xl p-2">{post.author}</h3>
            <input
              className="w-1/2 p-2 m-4 rounded-lg"
              name="title"
              id="title"
              defaultValue={post.title}
              onChange={(e) => SetTitleUpdate(e.target.value)}
            />
            <img src={post.attachment} alt="" className="w-3/4" />
            <textarea
              className="w-full p-2 m-4 rounded-lg"
              name="content"
              id="content"
              onChange={(e) => SetTextUpdate(e.target.value)}
              defaultValue={post.content}
            />
            <button
              className="w-1/3 bg-light font-bold uppercase text-red cursor-pointer p-2 rounded-lg"
              onClick={updateItem}
            >
              Modifier Post
            </button>
          </div>
        ) : (
          <></>
        )}
      </Popup>
    </div>
  );
};

export default UpdatePost;
