import React from "react";
import RepoItem from "./RepoItem";
import styles from "../styles/Repositories.module.css";

function Repositories({ repos, isLoading }) {
	const renderItems = () => {
		if (repos && repos.items.length > 0) {
			return repos.items.map((repo) => (
				<li key={repo.id}>
					<RepoItem
						url={repo.clone_url}
						likes={repo.stargazers_count}
						forks={repo.forks_count}
						watchers={repo.watchers_count}
						owner={repo.owner.login}
						title={repo.name}
						language={repo.language}
						avatar={repo.owner.avatar_url}
					/>
				</li>
			));
		}
	};

	return (
		<div
			className={`${styles.repositories} ${isLoading && styles.loading}`}
		>
			<ul>{renderItems()}</ul>
		</div>
	);
}

export default Repositories;
