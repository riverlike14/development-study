import "./topbar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Topbar = () => {
	return (
		<div className="topbar-container">
			<div className="topbar-left">
				<span className="logo">React Book</span>
			</div>
			<div className="topbar-center">
				<div className="search-bar">
					<SearchIcon className="search-icon" />
					<input placeholder="Search for friend, post or video" className="search-input" />
				</div>
			</div>
			<div className="topbar-right">
				<div className="topbar-links">
					<span className="topbar-link">Homepage</span>
					<span className="topbar-link">Timeline</span>
				</div>
				<div className="topbar-icons">
					<div className="topbar-icon-item">
						<PersonIcon />
						<span className="topbar-icon-badge">1</span>
					</div>
					<div className="topbar-icon-item">
						<ChatIcon />
						<span className="topbar-icon-badge">2</span>
					</div>
					<div className="topbar-icon-item">
						<NotificationsIcon />
						<span className="topbar-icon-badge">1</span>
					</div>
				</div>
				<img src="/assets/person0.jpg" alt="" className="topbar-image" />
			</div>
		</div>
	);
};

export default Topbar;
