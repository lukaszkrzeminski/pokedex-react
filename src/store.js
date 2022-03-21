import { configureStore } from "@reduxjs/toolkit";
import pokedexReducer from "./features/pokedexSlice";

const store = configureStore({
    reducer: {
        pokedex: pokedexReducer,
    }
});

export default store;