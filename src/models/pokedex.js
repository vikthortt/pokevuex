function Pokedex(name) {
  this.name = name;
  this.entries = [];
}

Pokedex.prototype.addPokemon = function _addPokemonEntry(pokemon) {
  this.entries.push(pokemon);
};

Pokedex.prototype.findById = function _findPokemonById(id) {
  return this.entries[id];
};

Pokedex.prototype.findByName = function _findPokemonByName(name) {
  return this.entries.filter((pokemon) => new RegExp(name).test(pokemon.name));
};

export default Pokedex;
