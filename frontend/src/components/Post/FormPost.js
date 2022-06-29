import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { UserIdContext } from "../AppContext";
import { FiUploadCloud } from "react-icons/fi";

const FormPost = () => {
  const [title, SetTitle] = useState("");
  const [content, SetContent] = useState("");
  const [selectedFile, SetSelectedFile] = useState(null);
  const token = sessionStorage.getItem("token");
  const user = useContext(UserIdContext);
  const handleFileSelect = (e) => {
    SetSelectedFile(e.target.files[0]);
  };
  const postData = new FormData();

  const handlePost = (e) => {
    postData.append("title", title);
    postData.append("content", content);
    postData.append("attachment", selectedFile);
    postData.append("author", user.pseudo);
    axios
      .post("http://localhost:3000/api/post/", postData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-5/12 bg-light text-dark rounded-md p-xs flex flex-col">
      <h3 className="text-xl font-bold  text-red m-4">Creez un Post:</h3>
      <hr className="w-3/4 h-xs mb-4" />
      <form
        className="max-h-full flex justify-center flex-wrap"
        encType="multipart/form-data"
        action=""
        onSubmit={handlePost}
        id="form_post"
      >
        <label className="hidden" htmlFor="titre">
          Titre
        </label>
        <input
          className="text-dark p-2 outline-none w-4/12"
          type="text"
          name="titre"
          id="titre"
          placeholder="Titre"
          onChange={(e) => SetTitle(e.target.value)}
          value={title}
        />
        <label className="hidden" htmlFor="contenu">
          Contenu
        </label>
        <textarea
          className="text-dark  m-4 p-2 outline-none rounded-md resize-none w-full h-large"
          type="text"
          name="contenu"
          id="contenu"
          placeholder="Ecrivez quelque chose ici..."
          onChange={(e) => SetContent(e.target.value)}
          value={content}
        />
        <label className=" flex text-3xl m-4 " htmlFor="attachment">
          <p className="text-xs p-2"> Insérer une image</p>
          <FiUploadCloud />
        </label>
        <input
          className="hidden"
          type="file"
          name="attachment"
          id="attachment"
          value={postData.attachment}
          onChange={handleFileSelect}
        />
        <input
          className="bg-light p-2 rounded-3xl text-red uppercase font-bold cursor-pointer"
          type="submit"
          value="Poster"
        />
      </form>
    </div>
  );
};

export default FormPost;
