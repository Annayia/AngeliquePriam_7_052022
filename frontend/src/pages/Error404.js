import React from "react";
import Navigation from "../components/Navigation";

const Error404 = () => {
  return (
    <div className="error404">
      <h1 className="error404_title">Error404</h1>
      <p className="error404_content">
        Sorry, are you lost? try going home maybe?
      </p>
      <Navigation />
    </div>
  );
};

export default Error404;
