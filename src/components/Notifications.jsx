import ipl from "../images/ipl.jpg";
import dp1 from "../images/dp1.jpg"
import dp2 from "../images/dp2.jpg"
import dp3 from "../images/dp3.jpg";
import nanidp from "../images/nanidp.jpg"
import styles from "./Notifications.module.css"
import Notification from "./Notification";


function Notifications(){
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
  

    return<>
      <div className={styles.container}>
        <div className={styles.head}>
          <h4>Notifications</h4>
        </div>
        <div className={styles.body}>
          {
            defNot.map(
              (not) => <Notification notf={not}></Notification>
            )
          }
        </div>
      </div>

    </>
}

export default Notifications;