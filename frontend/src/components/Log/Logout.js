import React from "react";
import { UserIdContext } from "../AppContext";
import { useContext } from "react";
import { BiLogOutCircle } from "react-icons/bi";

const Logout = () => {
  const user = useContext(UserIdContext);
  const logout = () => {
    if (user) {
      sessionStorage.clear();
      window.location = "/profil";
    }
  };
  return (
    <li className="items-center flex pl-4" onClick={logout}>
      <BiLogOutCircle className={"text-red text-3xl"} />
      <h5>LogOut</h5>
    </li>
  );
};

export default Logout;
