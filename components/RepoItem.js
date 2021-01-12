import styles from "../styles/RepoItem.module.css";
import Link from "next/link";

function RepoItem({
	avatar,
	language,
	title,
	owner,
	likes,
	forks,
	watchers,
	url,
}) {
	return (
		<div className={styles.repoItem}>
			<div className={styles.ownerInfo}>
				<img className={styles.avatar} src={avatar} alt="" />
				<p>{owner}</p>
			</div>
			<div className={styles.projectInfo}>
				<h4>Project: {title ? title : "n/a"}</h4>
				<h4>Language: {language ? language : "n/a"}</h4>
				<h4>
					Likes: <small>{likes}</small>
				</h4>
				<h4>
					Forks: <small>{forks}</small>
				</h4>
				<h4>
					Watchers: <small>{watchers}</small>
				</h4>
			</div>
			<a href={url} target="_blank">
				Visit Repository
			</a>
		</div>
	);
}

export default RepoItem;
