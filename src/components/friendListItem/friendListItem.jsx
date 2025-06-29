import styles from "./friendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline}) => {
    return (
      <div className={styles.card}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p
          className={`${styles.status} ${
            isOnline ? styles.online : styles.offline
          }`}
        >
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    );
  };
  
  export default FriendListItem;