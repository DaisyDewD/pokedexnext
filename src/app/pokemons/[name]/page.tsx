// src/app/pokemons/[name]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { fetchPokemon } from "@/services/fetchPokemon";
import styles from "./pokemon.module.scss";

interface Props {
  params: Promise<{ name: string }>;
}

export default async function PokemonDetailPage({ params }: Props) {

  const { name } = await params;
  const pokemon = await fetchPokemon(name);
  const imageSrc =
    pokemon.sprites.other?.["official-artwork"]?.front_default ||
    pokemon.sprites.front_default;

  return (
    <main style={{ padding: "2rem" }}>
      <div className={styles.detailContainer}>
        <Link href="/pokemons" className={styles.backButton}>
          ← Volver a la Pokédex
        </Link>

        {imageSrc && (
          <Image
            src={imageSrc}
            alt={`Imagen de ${pokemon.name}`}
            width={250}
            height={250}
            className={styles.pokemonImage}
            unoptimized 
          />
        )}

        <h1 className={styles.title}>
          #{pokemon.id} {pokemon.name}
        </h1>

        <div className={styles.pillsContainer}>
          {pokemon.types.map((t: any) => (
            <span key={t.type.name} className={styles.typePill}>
              {t.type.name}
            </span>
          ))}
        </div>

        <div className={styles.statsGrid}>
          {pokemon.stats.map((s: any) => (
            <div key={s.stat.name} className={styles.statItem}>
              <strong>{s.stat.name}:</strong>
              <span>{s.base_stat}</span>
            </div>
          ))}
          <div className={styles.statItem}>
            <strong>Altura:</strong>
            <span>{pokemon.height / 10} m</span>
          </div>
          <div className={styles.statItem}>
            <strong>Peso:</strong>
            <span>{pokemon.weight / 10} kg</span>
          </div>
        </div>
      </div>
    </main>
  );
}