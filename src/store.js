import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import pokemonListReducer from "./features/pokedexSlice";
import { watchFetchInitialPokemonList } from "./features/pokedexSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        pokemonList: pokemonListReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchInitialPokemonList);

export default store;