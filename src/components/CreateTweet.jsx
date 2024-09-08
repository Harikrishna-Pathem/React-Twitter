import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

function CreateTweet() {

  const {addPost} = useContext(PostList);
  
    const name = useRef();
    const username = useRef();
    const content = useRef();
    const image = useRef();

  function submitTweet(e){
    e.preventDefault();
    console.log(e);
    console.log(URL.createObjectURL(image.current.files[0]));
    
    const currentName = name.current.value;
    const currentUN = username.current.value;
    const currentContent = content.current.value;
    const currentImge = URL.createObjectURL(image.current.files[0]);
    console.log(currentName, currentUN, currentContent, currentImge)
    addPost(currentName, currentUN, currentContent, currentImge);
    name.current.value = "";
    username.current.value = "";
    content.current.value = "";
    image.current.value = "";

    
    
  }


  return (
    <>
      <form className="form" action="" onSubmit={(e) => submitTweet(e)}>
        <div>
          <input className="name" type="text" placeholder="Name" ref={name}></input>
        </div>
        <div>
          <input
            className="username"
            type="text"
            placeholder="username"
            ref={username}
          ></input>
        </div>
        <div className="content">
          <textarea placeholder="Content" name="Content" id="c" cols="30" rows="10" ref={content}></textarea>
        </div>
        <div className="image">
            <label htmlFor="#img">Choose an Image :</label>
            <input id="img" type="file" placeholder="Choose image" ref={image}/>
        </div>
        <div className="button">
          <button type="submit" className="post">Post</button>
        </div>
      </form>
    </>
  );
}

export default CreateTweet;
