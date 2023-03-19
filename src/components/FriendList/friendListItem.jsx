import { FriendItem, FriendSpan, FriendAvatar, FriendName } from './friendListItem.styled';

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
    return (
        <FriendItem key={id}>
            <FriendSpan className={"status " + (isOnline === true ? "active" : "")}>{isOnline}</FriendSpan>
            <FriendAvatar className="avatar" src={avatar} alt="User avatar" width="48" />
            <FriendName className="name">{name}</FriendName>
        </FriendItem>
    );
};
