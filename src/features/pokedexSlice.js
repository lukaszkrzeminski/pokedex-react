import { createSlice } from "@reduxjs/toolkit";

const pokedexSlice = createSlice({
    name:"pokemonData",
    initialState: {
        pokemonUrlList: "",
        nextPage: "",
        pokemonList: [],
        loading: true,
    },
    reducers: {
        fetchInitialPokemonData: (state) => {
            state.loading = true;
        },
        fetchInitialPokemonDataSuccess: (state, { payload: data }) => {
            state.pokemonUrlList = data[1];
            state.nextPage = data[0];
            state.pokemonList = data[2];
            state.loading = false;
        },
        fetchInitialPokemonDataError: (state) => {
            state.loading = false;
        },
    },
})

export const {
    fetchInitialPokemonData,
    fetchInitialPokemonDataSuccess,
    fetchInitialPokemonDataError,
} = pokedexSlice.actions;

export const selectPokemonUrlList = state => state.pokemonData.pokemonUrlList;
export const selectNextPage = state => state.pokemonData.nextPage;
export const selectPokemonList = state => state.pokemonData.pokemonList;
export default pokedexSlice.reducer;