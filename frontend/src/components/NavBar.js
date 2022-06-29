import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserIdContext } from "./AppContext";
import { IoMdLogIn } from "react-icons/io";
import Logout from "./Log/Logout";

const NavBar = () => {
  const user = useContext(UserIdContext);
  return (
    <nav className="h-large  text-dark font-bold min-w-screen">
      <div className="nav container h-full flex flex-nowrap items-center justify-between">
        <div className="justify-start px-10">
          <NavLink to="/">
            <img
              className="h-32"
              src="./images/icon-left-font-monochrome-black.png"
              alt="logo"
            />
          </NavLink>
        </div>
        {user ? (
          <ul className="flex row-auto items-center font-xl">
            <li></li>
            <li className="items-center flex row-auto">
              <NavLink to="/profil" className={"items-center flex row-auto"}>
                <img
                  src="./images/account-profile-user-icon--icon-search-engine-10.png"
                  alt="profil pic"
                  width="20rem"
                />
                <h5>Bienvenue {user.pseudo}</h5>
              </NavLink>
            </li>
            {user.isAdmin === 1 ? (
              <li className="items-center p-4 flex text-dark row-auto">
                <NavLink to="/admin">Dashboard</NavLink>
              </li>
            ) : (
              <></>
            )}
            <Logout />
          </ul>
        ) : (
          <ul className="flex row-auto text-dark items-center">
            <li className="items-center flex row-auto"></li>
            <li className="items-center flex row-auto">
              <NavLink to="/profil">
                <IoMdLogIn className={"text-dark text-3xl"} />
                <h5>LogIn</h5>
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
