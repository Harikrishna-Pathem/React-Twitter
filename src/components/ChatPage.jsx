import styles from "./ChatPage.module.css";
import Stories from "./Stories";
import ipl from "../images/ipl.jpg";
import dp1 from "../images/dp1.jpg";
import dp2 from "../images/dp2.jpg";
import dp3 from "../images/dp3.jpg";
import def from "../images/default.jpg";
import nanidp from "../images/nanidp.jpg";
import Message from "./Message";

function ChatPage() {
  const acc = [
    {
      dp: nanidp,
      account: "Hii Nani",
      msg: "Hii",
      time: "just now",
    },
    {
      dp: dp1,
      account: "Hari Krishna",
      msg: "Are you There",
      time: "1 m",
    },
    {
      dp: dp2,
      account: "Hk_Darling",
      msg: "Had a Lunch",
      time: " 34 m",
    },
    {
      dp: ipl,
      account: "IPLT20",
      msg: "sent you a post",
      time: "1 h",
    },
    {
      dp: dp3,
      account: "Nani123",
      msg: "Where are you",
      time: " 2 h",
    },
    {
      dp: def,
      account: "User Account",
      msg: "Blocked",
      time: "1 d",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <Stories acc={acc}></Stories>
        <Message acc= {acc}></Message>
      </div>
    </>
  );
}

export default ChatPage;
