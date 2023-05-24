import styles from "@/styles/header.module.css";

type headerProps = {
  query: string;
  setQuery: (query: string) => void;
};

const Header = ({ query, setQuery }: headerProps) => {
  return (
    <header className={styles.header}>
      <input
        type="text"
        placeholder="Search a Pokémon"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
    </header>
  );
};

export default Header;
