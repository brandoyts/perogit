import Head from "next/head";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

function Layout({ children }) {
	return (
		<>
			<Head>
				<title>PeroGit</title>
				<link
					rel="shortcut icon"
					href="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/71-github-256.png"
					type="image/x-icon"
				/>
			</Head>

			<Header />

			<main className={styles.container}>{children}</main>
		</>
	);
}

export default Layout;
