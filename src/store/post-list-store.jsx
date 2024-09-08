import { createContext, useReducer } from "react";
import ipl from "../images/ipl.jpg";
import dp1 from "../images/dp1.jpg";
import nanidp from "../images/nanidp.jpg";
import nani32 from "../images/nani32.jpg";
import dp2 from "../images/dp2.jpg"
import dp3 from "../images/dp3.jpg";




export const PostList = createContext({
    postList: [],
    addPost: () => {},
    notifications : []
});




// Reducer
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === "DELETE_POST") {
      newPostList = currPostList.filter(
        (post) => post.id !== action.payload.postId
      );
    } else if (action.type === "ADD_POST") {
      newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
  };


const PostListProvider = ({children}) => { 
    const [postList, dispatchPostList] = useReducer(postListReducer,  defaultPosts );
   

    const addPost = (account, username, content, image) => {
      const currentTime = new Date();
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                dp : dp1,
                account : account,
                username : username,
                content : content,
                image: image,
                time : currentTime.toLocaleTimeString(),
                likes : [Math.floor(Math.random() * 1000),Math.floor(Math.random() * 800), Math.floor(Math.random() * 500), Math.floor(Math.random() * 100)]
            },
          });



    }

    return(
     <PostList.Provider value={{postList, addPost}}>
        {children}
     </PostList.Provider>
    )

   
}

// Defalut posts

const defaultPosts = [{
    dp : nanidp,
    account : "NameisNani",
    username : "@nameisnani",
    content : "Going to start the 32nd film with Director sujeeth",
    image: nani32,
    time : "12:30pm",
    likes : [1200, 200, 50, 80]
  },
  {
    dp : dp2,
    account : "Hk Darling",
    username : "@hkdarling",
    content : "Going to Goa with my freinds which is going to be memoriable for me",
    image: "",
    time : "11:15am",
    likes : [120, 67, 45, 76]
  },
  {
    dp : dp3,
    account : "Hari Krishna",
    username : "@harikrishna",
    content : "Going to start the 32nd film with Director sujeeth Going to Goa with my freinds which is going to be memoriable for me",
    image: "",
    time : "10:25am",
    likes : [121, 90, 3, 12]
  },
  {
    dp : ipl,
    account : "IPLt20",
    username : "@iplt20",
    content : "The new season of IPL 2024 Shedule is Relesed - First match is CSK vs RCB",
    image: "",
    time : "yesterday, 11:00am",
    likes : [1489, 345, 76, 12]
  }
];

// notification
const defNot = [
  {
    dp: dp1,
    account : "Hk Darling",
    content : " is started following you",
    time : "1d"
  },
  {
    dp : nanidp,
    account : "NameisNani",
    content : " my have contact with you",
    time : "3d"
  },
  {
    dp : dp3,
    account : "Hari Krishna",
    content : " is trying to message you",
    time : "1w"
  },
  {
    dp : ipl,
    account : "IPLt20",
    content : " has added new post",
    time : "7w"
  },
  {
    account : "Nani123",
    content : " started following you",
    time : "8w"
  },
  {
      account : "Nani123",
    content : " is trying to Message youx",
    time : "9w"
  }
]



export default PostListProvider;
