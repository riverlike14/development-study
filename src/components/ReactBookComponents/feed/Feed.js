import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { Posts } from "../../../data";

const Feed = () => {
	const renderPosts = Posts.map(post => 
		<Post key={post.id} post={post} />
	);

	return (
		<div className="feed">
			<div className="feed-wrapper">
				<Share />
				{renderPosts}
			</div>
		</div>
	);
};

export default Feed;
