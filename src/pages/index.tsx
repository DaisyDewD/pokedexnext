import Head from "next/head";
import {Inter} from "next/font/google";
import styles from "@/styles/Home.module.css";
import {useEffect, useState} from "react";


const inter = Inter({subsets: ["latin"]});

interface PokeApi {
    name: string;
    url: string;
}

export default function Home() {
	const [data, setData] = useState<PokeApi[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }
  , []);

  return (
    <div className={styles.container}>
      <Head>
        <title>My Pokedex</title>
        <meta name="description" content="My Pokedex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>My Pokedex</h1>

        <p className={styles.description}>
          Get started by clicking on the Pokemon
        </p>

        <div className={styles.grid}>
          {data.map((pokemon) => (
            <a key={pokemon.name} href={`/pokemons/${pokemon.name}`}>
              <h3>{pokemon.name}</h3>
            </a>
          ))}
        </div>
      </main>

      <footer>
        <p>Amor a los Poke by DaisyDew</p>

      </footer>
    </div>
  );
}
