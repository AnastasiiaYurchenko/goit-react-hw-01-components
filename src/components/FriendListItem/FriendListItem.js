import PropTypes from 'prop-types';
import { Circle, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friendItem: { avatar, name, isOnline } }) => {
  return (
    <>
      <Circle status={isOnline}></Circle>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name> {name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  friendItem: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
