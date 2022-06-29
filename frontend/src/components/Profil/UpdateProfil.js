import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { UserIdContext } from "../AppContext";
import DeleteUser from "./DeleteUser";

const UpdateProfil = () => {
  const user = useContext(UserIdContext);
  const [pseudo, SetPseudo] = useState(user.pseudo);
  const [bio, SetBio] = useState("");
  const [updateForm, SetUpdateForm] = useState(false);
  const handleUpdate = (e) => {
    const userId = sessionStorage.getItem("user");
    const token = sessionStorage.getItem("token");
    const data = {
      pseudo: pseudo,
      bio: bio,
    };
    axios
      .put(`http://localhost:3000/api/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log("c'est bon"))
      .catch((err) => console.log(err));
    window.location.reload();
  };
  return (
    <div className="w-94 bg-lessdark backdrop-saturate-150 backdrop-blur-md p-8 m-8 rounded-rounded flex justify-center items-center flex-col">
      <div className="profil_container">
        <h1 className="text-5xl">Profil de {user.pseudo}</h1>
        <div className="pseudo_update p-4 flex justify-center items-center flex-col gap-4">
          <h3 className="text-3xl">Pseudo</h3>
          {updateForm === false && (
            <>
              <p className="text-xl" onClick={() => SetUpdateForm(!updateForm)}>
                {user.pseudo}
              </p>
              <button
                className="bg-light flex justify-center items-center text-dark p-2 rounded-md font-bold uppercase"
                onClick={() => SetUpdateForm(!updateForm)}
              >
                Modifier Pseudo
              </button>
              <h3 className="text-3xl">Bio</h3>
              <p className="text-xl" onClick={() => SetUpdateForm(!updateForm)}>
                {user.bio}
              </p>
              <button
                className="bg-light text-dark p-2 rounded-md font-bold uppercase"
                onClick={() => SetUpdateForm(!updateForm)}
              >
                Modifier Bio
              </button>
              <h3 className="text-3xl">Supprimer le compte:</h3>
              <DeleteUser />
            </>
          )}
          {updateForm && (
            <>
              <input
                type="text"
                name="pseudo"
                id="pseudo"
                required
                minLength="4"
                className="text-dark"
                defaultValue={user.pseudo}
                onChange={(e) => SetPseudo(e.target.value)}
              ></input>
              <textarea
                type="text"
                name="bio"
                id="bio"
                required
                minLength="4"
                className="text-dark"
                defaultValue={user.bio}
                onChange={(e) => SetBio(e.target.value)}
              ></textarea>
              <button onClick={handleUpdate}>Valider Modifications</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;
