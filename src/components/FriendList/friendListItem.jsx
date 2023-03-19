export const FriendListItem = ({ id, isOnline, avatar, name }) => {
    return (
        <li className="item" key={id}>
            <span className={"status " + (isOnline === true ? "active" : "")}>{isOnline}</span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
};
