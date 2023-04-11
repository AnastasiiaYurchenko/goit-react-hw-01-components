import PropTypes from 'prop-types';

export const FriendListItem = ({ friendItem: { avatar, name, isOnline } }) => {
  return (
    <>
      <span></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p> {name}</p>
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
