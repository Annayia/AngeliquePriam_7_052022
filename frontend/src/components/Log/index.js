import React, { useState } from "react";
import Login from "./Log";
import SignUp from "./SignUp";

const Log = (props) => {
  const [loginModal, SetLoginModal] = useState(props.login);
  const [signUpModal, SetSignUpModal] = useState(props.signup);
  const handleModals = (e) => {
    if (e.target.id === "register") {
      SetLoginModal(false);
      SetSignUpModal(true);
    } else if (e.target.id === "login") {
      SetLoginModal(true);
      SetSignUpModal(false);
    }
  };
  return (
    <div>
      <div className="form_connexion">
        <div className="form_container">
          <ul className="flex items-center justify-center m-4 gap-4">
            <li
              onClick={handleModals}
              id="register"
              className={signUpModal ? "active-btn" : null}
            >
              S'inscrire
            </li>
            <li
              onClick={handleModals}
              id="login"
              className={loginModal ? "active-btn" : null}
            >
              Se connecter
            </li>
          </ul>
          {signUpModal && <SignUp />}
          {loginModal && <Login />}
        </div>
      </div>
    </div>
  );
};
export default Log;
