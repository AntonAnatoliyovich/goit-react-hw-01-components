import { FriendListItem } from "./friendListItem";
import { FriendInfo } from "./friendList.styled";

export const FriendList = ({ friends }) => {
    return (
        <FriendInfo>
            {friends.map(friend => (
                <FriendListItem id={friend.id} isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />
            ))}
        </FriendInfo>
    );
};
