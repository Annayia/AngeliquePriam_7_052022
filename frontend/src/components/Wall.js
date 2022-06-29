import { useContext } from "react";
import { PostsContext } from "./AppContext";
import Post from "./Post/Post";
import FormPost from "./Post/FormPost";

const Wall = () => {
  const posts = useContext(PostsContext);
  return (
    <div className="w-screen justify-center items-center flex flex-col m-4 gap-4">
      <FormPost />
      <ul>
        <li className="justify-center items-center flex flex-col gap-4">
          {posts.map((post) => <Post post={post} key={post.id} />).reverse()}
        </li>
      </ul>
    </div>
  );
};
export default Wall;
