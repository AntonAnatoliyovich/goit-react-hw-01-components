import { FriendListItem } from "./friendListItem";
import friend from "../FriendList/friends.json";

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(friends => (
                <FriendListItem />
            ))}
        </ul>
    );
};
