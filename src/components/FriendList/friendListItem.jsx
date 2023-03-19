export const FriendListItem = ({ friends }) => {
    return (
        <li className="item" key={friends.id}>
            <span className="status">{friends.isOnline}</span>
            <img className="avatar" src={friends.avatar} alt="User avatar" width="48" />
            <p className="name">{friends.name}</p>
        </li>
    );
};
