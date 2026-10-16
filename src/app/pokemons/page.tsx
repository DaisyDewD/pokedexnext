import Link from "next/link";
import Image from "next/image";
import { fetchPokemons } from "@/services/fetchPokemons";
import styles from "./pokemons.module.scss";

export default async function PokemonsPage() {
  const pokemons = await fetchPokemons();

  return (
    <main className={styles.mainContainer}>
      <h1>Lista de Pokémon</h1>
      
      <div className={styles.grid}>
        {pokemons.map((pokemon) => (
          <Link 
            href={`/pokemons/${pokemon.name}`} 
            key={pokemon.id}
            className={styles.card}
          >
            <Image 
              src={pokemon.imgSrc} 
              alt={`Imagen de ${pokemon.name}`} 
              width={80} 
              height={80} 
              unoptimized 
            />
            <div className={styles.cardInfo}>
              <span className={styles.cardNumber}>#{pokemon.id}</span>
              <h2 className={styles.cardTitle}>
                {pokemon.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}