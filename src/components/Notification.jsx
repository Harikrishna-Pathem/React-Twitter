import styles from "./Notifications.module.css";
import defpic from "../images/default.jpg"
function Notification({notf}){

    return <>
        <div className={styles.notcont}>
            <div className={styles.dp}>
                <img src={notf.dp === undefined ? defpic : notf.dp} alt="" />
            </div>
            <div className={styles.content}>
                <p><span>{notf.account}</span>{notf.content}</p>
            </div>
            <div className={styles.time}>{notf.time}</div>
        </div>
    </>
}

export default Notification;