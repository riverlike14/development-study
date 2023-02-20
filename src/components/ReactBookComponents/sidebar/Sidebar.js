import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from "../../../data";
import CloseFriend from "../closeFriend/CloseFriend";

const Sidebar = () => {
	const renderCloseFriends = Users.map(user => (
		<CloseFriend key={user.id} user={user} />
	));

	return (
		<div className="sidebar">
			<div className="sidebar-wrapper">
				<ul className="sidebar-list">
					<li className="sidebar-list-item">
						<RssFeedIcon className="sidebar-icon" />
						<span className="sidebar-list-item-text">Feed</span>
					</li>
					<li className="sidebar-list-item">
						<ChatIcon className="sidebar-icon" />
						<span className="sidebar-list-item-text">Chats</span>
					</li>
					<li className="sidebar-list-item">
						<PlayCircleIcon className="sidebar-icon" />
						<span className="sidebar-list-item-text">Videos</span>
					</li>
					<li className="sidebar-list-item">
						<GroupIcon className="sidebar-icon" />
						<span className="sidebar-list-item-text">Groups</span>
					</li>
					<li className="sidebar-list-item">
						<BookmarkIcon className="sidebar-icon" />
						<span className="sidebar-list-item-text">Bookmarks</span>
					</li>
					<li className="sidebar-list-item">
						<HelpOutlineIcon className="sidebar-icon" />
						<span className="sidebar-list-item-text">Questions</span>
					</li>
					<li className="sidebar-list-item">
						<WorkOutlineIcon className="sidebar-icon" />
						<span className="sidebar-list-item-text">Jobs</span>
					</li>
					<li className="sidebar-list-item">
						<CalendarMonthIcon className="sidebar-icon" />
						<span className="sidebar-list-item-text">Events</span>
					</li>
					<li className="sidebar-list-item">
						<SchoolIcon className="sidebar-icon" />
						<span className="sidebar-list-item-text">Courses</span>
					</li>
				</ul>
				<button className="sidebar-button">Show More</button>
				<hr className="sidebar-hr"/>
				<ul className="sidebar-friend-list">
					{renderCloseFriends}
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
