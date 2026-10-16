// Estructura de cada elemento que devuelve la API de unpkg
export interface RawUnpkgPokemon {
  name: string;
  national_number: string;
  evolution?: string | null;
  types?: string[];
  total?: number;
  hp?: number;
  attack?: number;
  defense?: number;
  sp_atk?: number;
  sp_def?: number;
  speed?: number;
}

// Estructura del JSON que devuelve el endpoint
export interface UnpkgPokemonsResponse {
  results: RawUnpkgPokemon[];
}

// Estructura limpia y formateada de tu aplicación
export interface Pokemon {
  id: string;
  name: string;
  imgSrc: string;
}
