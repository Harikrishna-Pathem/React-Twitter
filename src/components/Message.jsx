import ipl from "../images/ipl.jpg";
import dp1 from "../images/dp1.jpg";
import dp2 from "../images/dp2.jpg";
import dp3 from "../images/dp3.jpg";
import defpic from "../images/default.jpg";
import nanidp from "../images/nanidp.jpg";
import styles from "./ChatPage.module.css";

function Message({ acc }) {
  return (
    <>
      <div className="">
        <div className={styles.head}>
          <h4>Messages </h4>
        </div>
        {acc.map((msg) => (
          <div className={styles.notcont}>
            <div className={styles.dp}>
              <img src={msg.dp === undefined ? defpic : msg.dp} alt="" />
            </div>
            <div className={styles.content}>
              <h5>{msg.account}</h5>
              <p>{msg.msg}</p>
            </div>
            <div className={styles.time}>{msg.time}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Message;
