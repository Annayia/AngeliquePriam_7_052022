import React, { useContext } from "react";
import Log from "../components/Log";
import { UserIdContext } from "../components/AppContext";
import UpdateProfil from "../components/Profil/UpdateProfil";

const Profil = () => {
  const user = useContext(UserIdContext);
  return (
    <div className="flex justify-center items-center h-screen">
      {user ? (
        <UpdateProfil />
      ) : (
        <div className="h-full overflow-hidden bg-no-repeat bg-cover bg-gradient-to-tl from-dark via-dark flex items-center justify-center">
          <Log login={false} signup={true} />
          <div className="w-1/2">
            <img
              src="./images/Mobile login-amico.png"
              alt="Login"
              className="max-w-full"
            />
            <a className="hidden" href="https://storyset.com/online">
              Online illustrations by Storyset
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profil;
