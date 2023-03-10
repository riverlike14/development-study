// "./components/Accordion.js"
import { useState } from "react";
import { RxDoubleArrowLeft, RxDoubleArrowDown } from "react-icons/rx";

const Accordion = ({ items }) => {
	const [expandedIndex, setExpandedIndex] = useState(-1);

	const handleClick = (nextIndex) => {
		console.log("STALE version of expandedIndex:", expandedIndex);
		setExpandedIndex(currentExpandedIndex => {
			console.log("UP TO DATE version of expandedIndex:", currentExpandedIndex);
			if (currentExpandedIndex === nextIndex) {
				return -1;
			} else {
				return nextIndex;
			}
		})
	}
	/*
	const handleClick = (nextIndex) => {
		if (expandedIndex === nextIndex) {
			setExpandedIndex(-1);
		} else {
			setExpandedIndex(nextIndex);
		}
	}
	*/

	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;

		const icon = (
			<span className="text-xl">
				{isExpanded ? <RxDoubleArrowDown /> : <RxDoubleArrowLeft />}
			</span>
		);

		return (
			<div key={item.id}>
				<div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
					{item.label}
					{icon}
				</div> 
				{isExpanded && <div className="border-b p-5">{item.content}</div>}
			</div>
		)
	});

	return (
		<div className="border-x border-t rounded">{renderedItems}</div>
	);
};

export default Accordion;
