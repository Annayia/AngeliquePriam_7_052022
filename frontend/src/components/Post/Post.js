import React from "react";
import DeletePost from "./DeletePost";
import Likes from "./Likes";
import { useContext, useState } from "react";
import { UserIdContext, CommentsContext } from "../AppContext";
import UpdatePost from "./UpdatePost";
import FormComments from "./FormComments";
import Comment from "./Comment";
import { FaRegCommentDots } from "react-icons/fa";

const Post = ({ post }) => {
  const comments = useContext(CommentsContext);
  const user = useContext(UserIdContext);
  const [hidden, setHidden] = useState("false");
  const handleToggle = () => {
    setHidden(!hidden);
  };
  return (
    <div className="w-full bg-light text-dark rounded-md p-xs flex flex-col justify-center items-center">
      <div className="post flex">
        <div className="flex flex-col justify-center p-4 items-center">
          <h2 className="text-red font-bold">{post.author}</h2>
          <hr className="w-full h-xs" />
          <h3 className="text-xl uppercase">{post.title}</h3>
          <hr className="w-2/3 h-xs" />
          <p className="text-lg">{post.content}</p>
          <img className="max-h-xlg w-xlg m-4" src={post.attachment} alt="" />
          <ul className="flex gap-8 items-center">
            <li>
              <Likes post={post} />
            </li>
            <li>
              <button
                aria-label="commentaires"
                className="text-red text-small flex flex-wrap gap-xs items-center"
                onClick={handleToggle}
              >
                <FaRegCommentDots className="text-lg" />
              </button>
            </li>
            <li className="flex flex-col">
              <div className={hidden ? "hidden" : null}>
                {comments.map((comment) =>
                  comment.postId === post.id ? (
                    <>
                      <Comment comment={comment} post={post} key={comment.id} />
                    </>
                  ) : (
                    <></>
                  )
                )}
              </div>
              <div className={hidden ? "hidden" : null}>
                <FormComments post={post} />
              </div>
            </li>
            <li className="flex gap-8">
              {post.userId === user.id ? (
                <>
                  <DeletePost post={post} />
                  <UpdatePost post={post} />
                </>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
