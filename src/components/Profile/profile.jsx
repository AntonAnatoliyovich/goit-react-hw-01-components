import {Description, Image, Name, Tag, Location, Stats, Item, Label, Quantity} from './profile.styled'

export const Profile = ({ userInfo : { username, tag, location, avatar, stats } }) => {
    return (
    <Description>
      <Image
      src={avatar}
      alt="User avatar"
      className="avatar"
      />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </Stats>
    </Description>
    );
};
