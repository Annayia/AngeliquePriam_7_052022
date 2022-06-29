import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pseudo, SetPseudo] = useState("");
  const handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/api/auth/signup`, {
        pseudo,
        email,
        password,
      })
      .then((res) => {
        window.location = "/profil";
        toast.success("Compte crée avec succès!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      })
      .catch((error) => {
        if (
          error.response.data.error.email &&
          error.response.data.error.password
        ) {
          toast.error(
            error.response.data.error.email +
              " " +
              error.response.data.error.password,
            {
              position: toast.POSITION.BOTTOM_RIGHT,
            }
          );
        } else if (error.response.data.error.email) {
          toast.error(error.response.data.error.email, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        } else if (error.response.data.error.password) {
          toast.error(error.response.data.error.password, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      });
  };
  return (
    <div className=" z-20 flex items-center justify-center">
      <div className="connexion_form">
        <div className="form bg-glass backdrop-blur-md backdrop-saturate-150 rounded-2xl p-4">
          <h1 className="form_title text-4xl p-2">S'inscrire</h1>
          <form
            className="flex items-center justify-center flex-col m-4 p-4"
            action=""
            onSubmit={handleSignUp}
            id="form_signup"
          >
            <label htmlFor="pseudo">Pseudo</label>
            <br />
            <input
              className="rounded-rounded h-8 w-56 p-4  font-bold text-red outline-none"
              type="text"
              name="pseudo"
              id="pseudo"
              onChange={(e) => SetPseudo(e.target.value)}
              value={pseudo}
            />
            <div className="pseudo_error"></div>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="rounded-rounded h-8 w-56 p-4  font-bold text-red outline-none"
              type="text"
              name="email"
              id="email"
              onChange={(e) => SetEmail(e.target.value)}
              value={email}
            />
            <div className="email_error"></div>
            <br />
            <label htmlFor="password">Mot de Passe</label>
            <br />
            <input
              className="rounded-rounded h-8 w-56 p-4  font-bold text-red outline-none"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="password_error"></div>
            <br />
            <input
              className="button bg-light p-4 rounded-3xl text-red uppercase font-bold cursor-pointer"
              type="submit"
              value="S'inscrire"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
