import "./rightbar.css";
import { Users } from "../../../data";
import Online from "../online/Online";

const Rightbar = ({ profile }) => {
	const renderOnlineUsers = Users.map(user => (
		<Online key={user.id} user={user} />
	));

	const homeRightbar = () => {
		return (
			<>
				<div className="birthday-container">
					<img className="birthday-image" src="/assets/birthday.png" alt="" />
					<span className="birthday-text">
						<b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
					</span>
				</div>
				<img className="rightbar-ad" src="/assets/ad.jpg" alt="" />
				<h4 className="rightbar-title">Online Friends</h4>
				<ul className="rightbar-friend-list">
					{renderOnlineUsers}
				</ul>
			</>
		);
	};

	const profileRightbar = () => {
		return (
			<>
				<h4 className="rightbar-title">User Information</h4>
				<div className="rightbar-info">
					<div className="rightbar-info-item">
						<span className="rightbar-info-key">City:</span>
						<span className="rightbar-info-value">New York</span>
					</div>
					<div className="rightbar-info-item">
						<span className="rightbar-info-key">From:</span>
						<span className="rightbar-info-value">Madrid</span>
					</div>
					<div className="rightbar-info-item">
						<span className="rightbar-info-key">Relationship:</span>
						<span className="rightbar-info-value">Single</span>
					</div>
				</div>
				<div className="rightbar-title">User Friends</div>
				<div className="rightbar-followings">
					<div className="rightbar-following">
						<img className="rightbar-following-image" src="/assets/person4.jpg" alt="" />
						<span className="rightbar-following-name">John Carter</span>
					</div>
					<div className="rightbar-following">
						<img className="rightbar-following-image" src="/assets/person4.jpg" alt="" />
						<span className="rightbar-following-name">John Carter</span>
					</div>
					<div className="rightbar-following">
						<img className="rightbar-following-image" src="/assets/person4.jpg" alt="" />
						<span className="rightbar-following-name">John Carter</span>
					</div>
					<div className="rightbar-following">
						<img className="rightbar-following-image" src="/assets/person4.jpg" alt="" />
						<span className="rightbar-following-name">John Carter</span>
					</div>
					<div className="rightbar-following">
						<img className="rightbar-following-image" src="/assets/person4.jpg" alt="" />
						<span className="rightbar-following-name">John Carter</span>
					</div>
				</div>
			</>
		);
	};

	return (
		<div className="rightbar">
			<div className="rightbar-wrapper">
				{profile ? profileRightbar() : homeRightbar()}
			</div>
		</div>
	);
};

export default Rightbar;
