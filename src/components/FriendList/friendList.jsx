import { FriendListItem } from "./friendListItem";

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(friend => (
                <FriendListItem id={friend.id} isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />
            ))}
        </ul>
    );
};
