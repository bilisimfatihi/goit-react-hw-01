import styles from "./friendList.module.css";
import FriendListItem from "../friendListItem/friendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
