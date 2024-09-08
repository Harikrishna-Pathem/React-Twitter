import styles from "./Friend.module.css"
import defpic from "../images/default.jpg"
function Friend({frnd}){
    return <>
         <div className={styles.trend}>
            <div className={styles.pic}>
                <img className={styles.img} src={frnd.dp == undefined ? defpic : frnd.dp} alt="" />
            </div>
            <div className={styles.content}>
            <h6 className="head">{frnd.account}</h6>
            <p className="re-tweets">{frnd.username}</p>
            </div>
            <div className={styles.btn}>
                <button className={styles.addfrnd}>Follow</button>
            </div>
        </div>
    </>
}

export default Friend;