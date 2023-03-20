import { FriendListItem } from "./friendListItem";
import { FriendInfo } from "./friendList.styled";
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
    return (
        <FriendInfo>
            {friends.map(friend => (
                <FriendListItem key={friend.id} isOnline={friend.isOnline} avatar={friend.avatar} name={friend.name} />
            ))}
        </FriendInfo>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array,
};
