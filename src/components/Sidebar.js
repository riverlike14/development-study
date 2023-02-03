import Link from "./Link";

const Sidebar = () => {
	const links = [
		{ label: "Dropdown", path: "/CustomRouter/Dropdown" },
		{ label: "Accordion", path: "/CustomRouter/Accordion" },
		{ label: "Buttons", path: "/CustomRouter/Button" },
		{ label: "Modal", path: "/CustomRouter/Modal" },
		{ label: "Counter", path: "/CustomRouter/Counter" },
	];

	const renderedLinks = links.map(link => {
		return (
			<Link
				key={link.label} 
				to={link.path} 
				className="mb-3"
				activeClassName="font-bold border-l-4 border-blue-500 pl-2"
			>
				{link.label}
			</Link>
		)
	});

	return (
		<div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
			{renderedLinks}
		</div>
	)
};

export default Sidebar;
