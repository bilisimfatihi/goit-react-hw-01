import styles from "./profile.module.css";

function Profile(props) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={props.image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.text}>{props.tag}</p>
        <p className={styles.text}>{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statItem}>
          <span className={styles.label}>Followers</span>
          <span className={styles.value}>{props.stats.followers}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.value}>{props.stats.views}</span>
        </li>
        <li className={styles.statItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.value}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
