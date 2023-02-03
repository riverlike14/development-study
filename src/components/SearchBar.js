import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
	const [term, setTerm] = useState("");

	const handleChange = (event) => {
		setTerm(event.target.value);
	}

	const handleFormSubmit = (event) => {
		event.preventDefault();
		onSubmit(term);
	}

	const placeholder = "Press ENTER Key";

	return (
		<div className="panel mt-4">
			<div className="panel-block py-4">
				<form className="control" onSubmit={handleFormSubmit} >
					<label className="label" >Enter Search Term</label>
					<input className="input is-medium" value={term} onChange={handleChange} placeholder={placeholder} />
				</form>
			</div>
		</div>
	);
};

export default SearchBar;
