import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
import ImgPost from "./ImgPost";

function Post({ post }) {

    const[liked, setLiked] = useState("unlike");

    function likes(){
      if(liked === "unlike")
        setLiked("liked");
      else
        setLiked("unlike");
    }

  return (
    <>
      <div className="post">
        <div className="dp-title">
          <div className="dp">
            <img src={post.dp} alt="" />
          </div>

          <div className="title">
            <h5>{post.account}</h5>
            <p>{post.username}</p>
          </div>
        </div>

        <div className="tweet-content">
          <p>{post.content}</p>
        </div>
       <div className="imgposts">
        {
          post.image !== "" ? <ImgPost src={post.image}></ImgPost> : ""
        }
       </div>
        <div className="likesline">
          <div className="like-icons">
            <div className="like" onClick={()=>{likes()}}>
              {liked === "unlike" ? <p>
                <FaRegHeart ></FaRegHeart>
                <span>{post.likes[0]}</span>
              </p> : <p style={{color: "red"}}>
                <FaHeart/>
                <span>{post.likes[0] + 1}</span>
              </p>}
            </div>
            <div className="comment">
              <p>
                <FaRegComment></FaRegComment>
                <span>{post.likes[1]}</span>
              </p>
            </div>
            <div className="rply">
              <p>
                <AiOutlineRetweet></AiOutlineRetweet>
                <span>{post.likes[2]}</span>
              </p>
            </div>
            <div className="share">
              <p>
                <LuSend></LuSend>
                <span>{post.likes[3]}</span>
              </p>
            </div>
          </div>
          <div className="time">
            <p>{post.time}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
