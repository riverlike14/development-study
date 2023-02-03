import axios from "axios";

const AccessKey = "sv-GZ9BIRH8q-yiCKyX4kd79HanfC27khUHeL2ObN0w";

const searchImages = async (term) => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization: `Client-ID ${AccessKey}`
		},
		params: {
			query: term
		}
	});

	return response.data.results;
};

export default searchImages;
