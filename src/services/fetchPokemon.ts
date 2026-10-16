
export async function fetchPokemon(name: string) {
  // Buscando por el nombre
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  
  if (!response.ok) {
    throw new Error(`No se pudo obtener el Pokémon: ${name}`);
  }

  return response.json();
}