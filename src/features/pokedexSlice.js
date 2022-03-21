import { createSlice } from "@reduxjs/toolkit";

const pokedexSlice = createSlice({
    name:"pokemonList",
    initialState: {
        pokemonList: [],
        nextPage: "",
        loading: true,
    },
    reducers: {
        fetchInitialPokemonList: (state) => {
            state.loading = true;
        },
        fetchInitialPokemonListSuccess: (state, { payload: initialPokemonList }) => {
            state.pokemonList = initialPokemonList.results;
            state.nextPage = initialPokemonList.next;
            state.loading = false;
        },
        fetchInitialPokemonListError: (state) => {
            state.loading = false;
        },
    },
})

export const {
    fetchInitialPokemonList,
    fetchInitialPokemonListSuccess,
    fetchInitialPokemonListError,
} = pokedexSlice.actions;

const selectPokedexState = state => state.pokemonList;

export const selectPokemonList = state => selectPokedexState(state).pokemonList;
export const selectNextPage = state => selectPokedexState(state).nextPage;
export default pokedexSlice.reducer;