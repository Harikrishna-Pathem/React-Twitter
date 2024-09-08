import styles from "./ImgPost.module.css";


function ImgPost({src}){
    return <img src={src} className={`${styles.postimg}`} alt="" />
}

export default ImgPost;