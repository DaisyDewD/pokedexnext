import {
  Pokemon,
  RawUnpkgPokemon,
  UnpkgPokemonsResponse,
} from "../types/types";
import { formatName } from "../utils/utils";

export async function fetchPokemons(): Promise<Pokemon[]> {
  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json"
  );

  if (!response.ok) {
    throw new Error(`Error al obtener Pokémon: ${response.statusText}`);
  }

  // Se asigna la interfaz a la respuesta JSON
  const data: UnpkgPokemonsResponse = await response.json();

  // Mapeo fuertemente tipado sin 'any'
  const pokemons: Pokemon[] = data.results.map((pokemon: RawUnpkgPokemon) => ({
    name: pokemon.name,
    id: pokemon.national_number,
    imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatName(
      pokemon.name.toLowerCase()
    )}.gif`,
  }));

  // Filtrado de duplicados usando un Map (Más eficiente que findIndex)
  const uniquePokemonsMap = new Map<string, Pokemon>();
  
  for (const pokemon of pokemons) {
    if (!uniquePokemonsMap.has(pokemon.id)) {
      uniquePokemonsMap.set(pokemon.id, pokemon);
    }
  }
//await new Promise((resolve) => setTimeout(resolve, 3000)); Para forzar 3s de loading
  return Array.from(uniquePokemonsMap.values());
}