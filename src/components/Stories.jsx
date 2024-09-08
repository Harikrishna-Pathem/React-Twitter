import styles from "./ChatPage.module.css";
import Storie from "./Storie";
function Stories({ acc }) {
  return (
    <>
      <div className={styles.stories}>
      
        {acc.map((story) => (
          <Storie story={story}></Storie>
        ))}
      </div>
    </>
  );
}

export default Stories;
