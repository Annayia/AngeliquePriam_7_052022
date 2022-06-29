import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <NavLink to="/">
          <p>Accueil</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
