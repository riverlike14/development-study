import "./closeFriend.css";

const CloseFriend = ({ user }) => {
	return (
		<li className="sidebar-friend">
			<img className="sidebar-friend-image" src={user.profilePicture} alt="" />
			<span className="sidebar-friend-name">{user.username}</span>
		</li>
	);
};

export default CloseFriend;
