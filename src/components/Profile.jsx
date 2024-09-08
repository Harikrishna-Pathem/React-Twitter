import styles from "./Profile.module.css";
import nanicover from "../images/nanicover.jpg";
import nanidp from "../images/nanidp.jpg";
import { IoArrowBack } from "react-icons/io5";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { LiaCalendarAlt } from "react-icons/lia";
function Profile() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.icon}>
            <IoArrowBack></IoArrowBack>
          </div>
          <div className={styles.pname}>
            <h5>Hii Nani <span><BsFillPatchCheckFill></BsFillPatchCheckFill></span></h5>
            <p>12K Tweets</p>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.cover}>
            <img src={nanicover} alt="" />
          </div>
          <div className={styles.content}>
            <div className={styles.dpline}>
              <div className={styles.dp}>
                <img src={nanidp} alt="" />
              </div>
              <div className={styles.edit}>
                <button className="btn btn-outline-primary">Edit Profile</button>
              </div>
            </div>
          </div>
          <div className={styles.context}>
            <div className={styles.profileName}>
                <h4>Hii Nani <span><BsFillPatchCheckFill></BsFillPatchCheckFill></span></h4>
                <p>@NameisNani</p>
            </div>
            <div className={styles.bio}>
              <p>A-R-T-I-S-T</p>
            </div>
            <div className={styles.location}>
              <p><span><CiLocationOn></CiLocationOn></span> Hyderbad, india</p>
              <p><span><LiaCalendarAlt></LiaCalendarAlt></span> Joined February 2012</p>
            </div>
            <div className={styles.followers}>
              <p><span>36</span> Following</p>
              <p><span>4.7M</span> Followers</p>
            </div>
          </div>
          <div className={styles.nav}>
            <ul>
              <li>Posts</li>
              <li>Replies</li>
              <li>Medias</li>
              <li>Likes</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
