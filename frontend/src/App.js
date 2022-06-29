import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profil from "./pages/Profil";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import AdminBoard from "./pages/AdminBoard";
import NavBar from "./components/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  CommentsContext,
  PostsContext,
  UserIdContext,
} from "./components/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [user, SetUser] = useState(null);
  useEffect(() => {
    const userId = sessionStorage.getItem("user");
    const token = sessionStorage.getItem("token");
    if (token) {
      axios
        .get(`http://localhost:3000/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          SetUser(res.data);
        })
        .catch((err) => console.log("ca marche pas"));
    }
  }, []);
  const [posts, SetPosts] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      axios
        .get(`http://localhost:3000/api/post/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          SetPosts(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  const [comment, SetComment] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      axios
        .get(`http://localhost:3000/api/comment/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          SetComment(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <UserIdContext.Provider value={user}>
      <PostsContext.Provider value={posts}>
        <CommentsContext.Provider value={comment}>
          <ToastContainer />
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/admin" element={<AdminBoard />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/profil" element={<Profil />}></Route>
              <Route path="*" element={<Error404 />}></Route>
            </Routes>
          </BrowserRouter>
        </CommentsContext.Provider>
      </PostsContext.Provider>
    </UserIdContext.Provider>
  );
};

export default App;
