import { FriendItem, FriendSpan, FriendAvatar, FriendName } from './friendListItem.styled';
import PropTypes from "prop-types";

export const FriendListItem = ({ isOnline, avatar, name }) => {
    return (
        <FriendItem>
            <FriendSpan className={"status " + (isOnline === true ? "active" : "")}></FriendSpan>
            <FriendAvatar src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
        </FriendItem>
    );
};

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
};
