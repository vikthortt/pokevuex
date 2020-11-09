<template>
  <div class="home">
    <PokemonPreview
      v-for="pokemon of pokemonPreviews"
      :key="pokemon.index"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonPreview from "@/components/PokemonPreview.vue";
import api from "@/api/pokeapi";

export default {
  name: "Home",
  components: {
    PokemonPreview,
  },
  data: () => ({
    pokedex: null,
  }),
  computed: {
    pokemonPreviews() {
      return this.pokedex?.entries.map((pokemon) => ({
        index: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprite,
        types: pokemon.types.map((t, i) => ({
          id: i,
          name: t,
          classes: ["bg-gray-200"],
        })),
      }));
    },
  },
  async created() {
    this.pokedex = await api.preloadPokedexData();
  },
};
</script>
