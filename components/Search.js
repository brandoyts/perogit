import styles from "../styles/Search.module.css";
import languages from "../programming_languages.json";

function Search({ onChange, values }) {
	return (
		<div className={styles.search}>
			<SearchText onChange={onChange} values={values} />
			<Languages onChange={onChange} values={values} />
		</div>
	);
}

function Languages({ onChange, values }) {
	return (
		<select
			className={styles.search__select}
			onChange={onChange}
			type="text"
			name="languageInput"
			placeholder="select language..."
			value={values.languageInput}
		>
			<option value="">All</option>
			{languages.map((language, index) => (
				<option key={index} value={language.value}>
					{language.title}
				</option>
			))}
		</select>
	);
}

function SearchText({ onChange, values }) {
	return (
		<input
			className={styles.search__text}
			onChange={onChange}
			type="text"
			name="searchInput"
			placeholder="Search repositories..."
			value={values.searchInput}
		/>
	);
}

export default Search;
