import styles from "./ChatPage.module.css"
function Storie({story}){
    return <>
        <div className={styles.story}>
            <div className={styles.storyDP}>
                <img src={story.dp} alt="" />
            </div>
            <div className={styles.accName}>
                <p>{story.account}</p>
            </div>
        </div>
    </>
}

export default Storie;