<template>
  <div class="flex p-4">
    <img
      :src="pokemon.sprite"
      :alt="pokemon.name"
      class="rounded-full h-16 w-16 bg-gray-500 mr-4"
    />
    <div class="text-left w-full">
      <h2 class="text-xl">
        {{ pokemon.name }}
      </h2>
      <div class="flex justify-between">
        <span># {{ pokemon.index.toString().padStart(3, "0") }}</span>
        <div>
          <span
            v-for="type of pokemon.types"
            v-bind:key="type.id"
            class="rounded px-1 ml-1"
            :class="type.classes"
            >{{ type.name }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonPreview",
  props: ["pokemon"],
};
</script>

<style lang="scss" scoped></style>
