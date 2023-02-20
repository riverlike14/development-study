import { Topbar, Sidebar, Rightbar, Feed } from "../../../components/ReactBookComponents";
import "./home.css";

const Home = () => {
	return (
		<>
			<Topbar />
			<div className="home-container">
				<Sidebar />
				<Feed />
				<Rightbar />
			</div>
		</>
	)
};

export default Home;
