export const getInitialPokemon = async () => {
    const response = await fetch("test-data.json");

    if(!response.ok) {
        new Error(response.statusTest);
    }

    const initialPokemonList = await response.json();
    console.log(initialPokemonList);

    return initialPokemonList;
};