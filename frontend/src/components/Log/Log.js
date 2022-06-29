import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/api/auth/login`, { email, password })
      .then((res) => {
        if (res.data.error) {
        } else {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("user", res.data.userId);
          window.location = "/";
        }
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
  return (
    <div className="flex items-center justify-center">
      <div className="connexion_form">
        <div className="bg-glass backdrop-blur-md backdrop-saturate-150 rounded-2xl p-4">
          <h1 className="form_title text-4xl p-2">Se connecter</h1>
          <form
            className="flex items-center justify-center flex-col m-4 p-4"
            action=""
            onSubmit={handleLogin}
            id="form_login"
          >
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
            <br />
            <label htmlFor="password">Mot de Passe</label>
            <br />
            <input
              className="rounded-rounded h-8 w-56 p-4 text-red font-bold outline-none"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <br />
            <input
              type="submit"
              value="Se connecter"
              className="button bg-light p-4 rounded-3xl text-red uppercase font-bold cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
