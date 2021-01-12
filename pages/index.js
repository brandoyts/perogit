import { useState, useEffect } from "react";
import searchRepo from "../services/github";
import Layout from "../components/Layout";
import Search from "../components/Search";
import Repositories from "../components/Repositories";

function index() {
	const [repos, setRepos] = useState(null);
	const [isLoading, setIsloading] = useState(false);
	const [inputValues, setInputValues] = useState({
		searchInput: "",
		languageInput: "",
	});

	const handleInputChange = async (e) => {
		const key = e.target.name;
		const value = e.target.value;

		try {
			setIsloading(true);
			setInputValues({ ...inputValues, [key]: value });
			const repos = await searchRepo(e.target.value, e.target.value);

			setRepos({
				count: repos.total_count,
				items: repos.items,
			});

			setIsloading(false);
		} catch (error) {
			console.log(error);
			setIsloading(false);
		}
	};

	useEffect(() => {
		const initRepos = async () => {
			try {
				setIsloading(true);
				const repos = await searchRepo();

				setRepos({
					count: repos.total_count,
					items: repos.items,
				});
				setIsloading(false);
			} catch (error) {
				alert(error);
				setIsloading(false);
			}
		};

		initRepos();
	}, []);

	return (
		<Layout>
			<Search onChange={handleInputChange} values={inputValues} />
			<Repositories isLoading={isLoading} repos={repos} />
		</Layout>
	);
}

export default index;
