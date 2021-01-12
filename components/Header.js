import styles from "../styles/Header.module.css";

function Header() {
	return (
		<header className={styles.header}>
			<img
				className={styles.header__logo}
				src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-256.png"
				alt=""
			/>
		</header>
	);
}

export default Header;
