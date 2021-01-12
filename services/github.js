import axios from "axios";

const config = {
	baseURL: "https://api.github.com/",
	auth: {
		username: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
		password: process.env.NEXT_PUBLIC_SECRET,
	},
};

async function searchRepo(searchText = "", language = "") {
	const query = `${searchText}+language=${language && language}`;
	const response = await axios.get(`search/repositories?q=${query}`, config);
	return response.data;
}

export default searchRepo;
