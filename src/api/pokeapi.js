import Axios from "axios";
import Pokedex from "../models/pokedex";
import Pokemon from "../models/pokemon";

let pokedex = null;

export default {
  async preloadPokedexData() {
    if (pokedex) {
      return pokedex;
    }

    const { data } = await Axios.get(`https://pokeapi.co/api/v2/pokedex/2/`);
    pokedex = new Pokedex(data.name);

    for await (const pokemon_entry of data.pokemon_entries) {
      const { data: data_specie } = await Axios.get(
        pokemon_entry.pokemon_species.url
      );

      const { data: data_pokemon } = await Axios.get(
        data_specie.varieties.find((v) => v.is_default).pokemon.url
      );

      const pokemon = new Pokemon(
        pokemon_entry.entry_number,
        pokemon_entry.pokemon_species.name,
        data_specie.flavor_text_entries.find(
          (ft) => ft.language.name === "en" && ft.version.name === "red"
        ).flavor_text,
        data_pokemon.types.map((t) => t.type.name),
        data_pokemon.sprites.front_default,
        data_pokemon.sprites.other["official-artwork"].front_default
      );

      pokedex.addPokemon(pokemon);
    }

    return pokedex;
  },
};
