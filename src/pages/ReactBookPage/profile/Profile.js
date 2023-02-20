import "./profile.css";
import { Topbar, Sidebar, Rightbar, Feed } from "../../../components/ReactBookComponents";

const Profile = () => {
	return (
		<>
			<Topbar />
			<div className="profile">
				<Sidebar />
				<div className="profile-right">
					<div className="profile-right-top">
						<div className="profile-cover">
							<img className="profile-cover-image" src="/assets/person3.jpg" alt="" />
							<img className="profile-user-image" src="/assets/person4.jpg" alt="" />
						</div>
						<div className="profile-info">
							<h4 className="profile-info-name">Wooyoung Jang</h4>
							<span className="profile-info-desc">Hello my friends!</span>
						</div>
					</div>
					<div className="profile-right-bottom">
						<Feed />
						<Rightbar profile />
					</div>
				</div>
			</div>
		</>
	);
};

export default Profile;
