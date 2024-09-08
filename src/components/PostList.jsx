import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext } from "react";


function PostList() {
  
  const{postList} = useContext(PostListData);
  
  return (
    <>
      <div className="postbox">
        {
            postList.map(
                (post) => <Post post={post}></Post>
            )
        }
      </div>
    </>
  );
}

export default PostList;
