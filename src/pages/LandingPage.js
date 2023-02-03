// import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import ProjectSummary from "../data/ProjectSummary";

const LandingPage = () => {
	const renderedProjectCards = ProjectSummary.map((data, idx) => {
		return (
			<ProjectCard key={idx} {...data} />
		)
	});

	return (
		<div className="container">
			<div className="section>">
				{renderedProjectCards}
			</div>
		</div>
	);
};

export default LandingPage;
