import React, { useContext } from "react";
import { UserIdContext } from "../components/AppContext";
import Wall from "../components/Wall.js";

const Home = () => {
  const user = useContext(UserIdContext);
  return (
    <div>
      <div className="home flex justify-center items-center max-w-screen">
        <div className="main w-full">
          <img
            className=" absolute -z-10 top-0 left-0 w-104"
            src="./images/Online world-pana.png"
            alt=""
          />
          {user ? (
            <Wall className="overflow-scroll" />
          ) : (
            <h2 className="flex justify-center items-center text-red text-4xl p-4 z-10">
              Veuillez vous connectez
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
