import { Link } from "react-router-dom";

const ProjectCard = ({ Title, Image, Features, TestLink, Libraries, DetailURL }) => {
	const renderedTitle = (
		<div className="card-header-title">
			<div className="title">{Title}</div>
		</div>
	);

	const renderedImage = (
		<div className="card-header p-2 has-background-white">
			<img className="m-0" alt={Image.alt} src={Image.src} />
		</div>
	);

	const renderedFeatures = Features.map((feature, idx) => {
		return (
			<div key={idx} className="list-item">
				<li>{feature}</li>
			</div>
		);
	});

	const renderedLibraries = Libraries.map((library, idx) => {
		return (
			<div key={idx} className="list-item">
				<li><code>{library}</code></li>
			</div>
		);
	});

	const renderedTestLink = (
		<span>
			You can try <Link className="has-text-link" to={TestLink}>in here!</Link>
		</span>
	);

	const renderedDetails = (
		<span>
			You can see the details <a href={DetailURL} className="has-text-link" >in this page</a>.
		</span>
	);

	return (
			<div className="card has-background-white-ter m-6">
				<div className="card-container p-2">
					<div className="card-header p-2 mb-3 has-background-white">
						{renderedTitle}
					</div>
					<div className="columns" >
						<div className="column is-two-fifths pr-0">
							{renderedImage}
						</div>
						<div className="column is-three-fifths">
							<div className="card-header column has-background-white p-5">
								<div className="content">
									<div className="title is-4 mb-4">Features</div>
									<ul className="list">
										{renderedFeatures}
									</ul>
								</div>
								<div className="content">
									<div className="title is-4 mb-4">Libraries</div>
									<ul className="list">
										{renderedLibraries}
									</ul>
								</div>
								<div className="content">
									<div className="title is-4 mb-4">Link</div>
									{renderedTestLink}
								</div>
								<div className="content">
									<div className="title is-4 mb-4">Details</div>
									{renderedDetails}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
	)
};

export default ProjectCard;
