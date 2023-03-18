import {Description, Image, Name, Tag, Location} from './profile.styled'

export const Profile = ({ userInfo : { username, tag, location, avatar, stats } }) => {
    return (
    <div class="profile">
      <Description>
        <Image
        src={avatar}
        alt="User avatar"
        class="avatar"
        />
        <Name>{username}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
    );
};
