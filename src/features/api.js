export const getInitialPokemon = async () => {
    const response = await fetch("test-data.json");

    if (!response.ok) {
        new Error(response.statusTest);
    }

    const initialData = await response.json();
    const nextPage = await initialData.next;
    const pokemonUrlList = [];
    let i = 0;
    for (const pokemon of initialData.results){
        pokemonUrlList[i] = pokemon.url;
        i++;
    }

    const pokemonData = [];
    let j = 0;
    for (const url of pokemonUrlList){
        let dataResponse = await fetch(url);

        pokemonData[j] = await dataResponse.json();
        
        if (!response.ok) {
            new Error(response.statusTest);
        }
        j++;
    }

    const data = [nextPage, pokemonUrlList, pokemonData];
    return data;
};