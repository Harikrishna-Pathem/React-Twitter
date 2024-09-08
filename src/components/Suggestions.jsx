import { useContext } from "react"
import { PostList } from "../store/post-list-store"
import Friend from "./Friend";
import ipl from "../images/ipl.jpg";
import dp1 from "../images/dp1.jpg"
import dp2 from "../images/dp2.jpg"
import dp3 from "../images/dp3.jpg";
import nanidp from "../images/nanidp.jpg"


function Suggestions(){

  const friends = [
    {
      dp: dp1,
      account : "Hk Darling",
      username : "@hkdarling"
    },
    {
      dp : nanidp,
      account : "NameisNani",
      username : "@nameisnani"
    },
    {
      dp : dp3,
      account : "Hari Krishna",
      username : "@harikrishna",
    },
    {
      dp : ipl,
      account : "IPLt20",
      username : "@iplt20"
    },
    {
      account : "Nani123",
      username : "@nani123"
    }
  ]
    return <>
        <div className="trendbox">
        <div className="trend-head">
          <h5>Sugestions from your contact</h5>
          <hr />
          <div className="trends">
            {friends.map((frnd) => (
              <Friend
                frnd={frnd}
              ></Friend>
            ))}
          </div>
          <a href="#">Show More</a>
        </div>
      </div>
    </>
}

export default Suggestions;