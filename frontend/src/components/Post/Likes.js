import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import { UserIdContext } from "../AppContext";
import { useContext } from "react";
import axios from "axios";

const Likes = ({ post }) => {
  const user = useContext(UserIdContext);
  const DisplayLike = () => {
    const handleLike = () => {
      const token = sessionStorage.getItem("token");
      axios
        .post(
          `http://localhost:3000/api/likes/${post.id}`,
          { userId: user.id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      window.location.reload();
    };
    const handleUnlike = () => {
      const token = sessionStorage.getItem("token");
      axios
        .delete(`http://localhost:3000/api/likes/${post.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
      window.location.reload();
    };
    for (let i = 0; i < post.likes.length; i++) {
      if (post.likes[i].userId === user.id) {
        return (
          <BsFillSuitHeartFill
            className="text-xl text-red"
            onClick={handleUnlike}
          />
        );
      } else {
        return (
          <BsSuitHeart className="text-xl text-red" onClick={handleLike} />
        );
      }
    }
    if (post.likes.userId !== user.id) {
      return <BsSuitHeart className="text-xl text-red" onClick={handleLike} />;
    }
  };
  return (
    <div>
      <div className="like_container cursor-pointer w-full justify-end m-2 font-bold items-center flex flex-row">
        <DisplayLike />
        <p className="ml-2">{post.likes.length}</p>
      </div>
    </div>
  );
};

export default Likes;
