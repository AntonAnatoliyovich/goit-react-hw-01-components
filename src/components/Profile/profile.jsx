import { Tag, Location, Stats, Item, Label, Quantity } from './profile.styled';
import PropTypes from "prop-types";
import css from './Profile.module.css';

export const Profile = ({ userInfo : { username, tag, location, avatar, stats } }) => {
    return (
    <div className={css.description}>
      <img
      src={avatar}
      alt="User avatar"
      className={css.image}
      />
      <p className={css.name}>{username}</p>
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
    </div>
    );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.string,
}
