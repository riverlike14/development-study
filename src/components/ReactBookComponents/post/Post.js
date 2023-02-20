import "./post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../../data";
import { useState } from "react";

const Post = ({ post }) => {
	const [like, setLike] = useState(post.like);
	const [isLiked, setIsLiked] = useState(false);

	const userInfo = Users.filter(user => user.id === post.userId)[0];

	const likeHandler = () => {
		setLike(isLiked? like - 1 : like + 1);
		setIsLiked(!isLiked);
	}

	return (
		<div className="post">
			<div className="post-wrapper">
				<div className="post-top">
					<div className="post-top-left">
						<img className="post-profile-image" src={userInfo.profilePicture} alt="" />
						<span className="post-username">{userInfo.username}</span>
						<span className="post-date">{post.date}</span>
					</div>
					<div className="post-top-right">
						<MoreVertIcon />
					</div>
				</div>
				<div className="post-center">
					<span className="post-text">{post?.desc}</span>
					{post?.photo && <img className="post-image" src={post?.photo} alt="" />}
				</div>
				<div className="post-bottom">
					<div className="post-bottom-left">
						<img className="like-icon" src="/assets/like.png" onClick={likeHandler} alt="" />
						<img className="like-icon" src="/assets/heart.png" onClick={likeHandler} alt="" />
						<span className="post-like-counter">{like} people like it!</span>
					</div>
					<div className="post-bottom-right">
						<span className="post-comment-text">{post.comment} comments</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
