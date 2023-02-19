import "../styles/Playlists.css";
import "bulma/css/bulma.css";
import { useDispatch } from "react-redux";
import MoviePlaylist from "../components/MoviePlaylist";
import SongPlaylist from "../components/SongPlaylist";
import { reset } from "../store";

const PlaylistsPage = () => {
	const dispatch = useDispatch();

	const handleResetClick = () => {
		dispatch(reset());
	};

	return (
		<div className="playlist container is-fluid">
			<button onClick={() => handleResetClick()} className="button is-danger">
				Reset Both Playlists
			</button>
			<hr />
			<MoviePlaylist />
			<hr />
			<SongPlaylist />
		</div>
	);
};

export default PlaylistsPage;
