export const getInitialPokemon = async () => {
    const response = await fetch("test-data.json");

    if(!response.ok) {
        new Error(response.statusTest);
    }

    const initialData = await response.json();

    return initialData;
};