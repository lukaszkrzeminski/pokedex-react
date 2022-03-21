import { createSlice } from "@reduxjs/toolkit";

const pokedexSlice = createSlice({
    name:"pokemonList",
    initialState: {
        pokemonList: [],
        loading: true,
    },
    reducers: {
        fetchInitialPokemonList: (state) => {
            state.loading = true;
        },
        fetchInitialPokemonListSuccess: (state, { payload: initialPokemonList }) => {
            state.pokemonList = initialPokemonList;
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
export default pokedexSlice.reducer;