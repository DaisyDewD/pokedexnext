import Header from "@/components/Header";
import homeContentEN from "@/lang/en/home";
import homeContentES from "@/lang/es/home";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
//import { NextPage } from 'next';
import { Inter } from "next/font/google";
import { use, useEffect, useState } from "react";
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ["latin"] });

interface Pokemon {
  name: string;
  url: string;
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => setPokemon(data.results.slice(0, 50)));
  }, []);

  return (
    <>
      <Head>
        <title>My pokedex</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="My pokedex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header query={query} setQuery={setQuery} />
      <main className={`${styles.main} ${inter.className}`}>
        <h1 className={styles.title}>My pokedex</h1>
        <div className={styles.grid}>
          {pokemon.map((pokemon, index) => (
            <div key={index} className={styles.card}></div>

		


          ))}
        </div>
      </main>
    </>
  );
}

/* interface Props {
	data: Character[]
}

const Home: NextPage<Props> = ({data}) => {

	// Traducciones
	const router = useRouter();
	const {locale} = router;
	const content =
		locale === "en"
			? homeContentEN
			: locale === "es"
			? homeContentES
			: homeContentEN;


	return (
		<Layout title="Ecommerce DH">
			<div>
				<h1>{content.title}</h1>
				<div className={styles.grid}>
					{data.map((item) => (
						<Card key={item.tail} item={item} />
					))}
				</div>
			</div>
		</Layout>
	);
}

export const getStaticProps = async() => {
	const characters = await fetch("https://amiiboapi.com/api/amiibo/")
	const resp = await characters.json()
	const data = resp.amiibo.slice(0, 50)

	return {
		props: {
			data
		}
	}
}

export default Home; */
