import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import pokedexSliceReducer from "./features/pokedexSlice";
import { watchFetchInitialPokemonList } from "./features/pokedexSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        pokemonData: pokedexSliceReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchInitialPokemonList);

export default store;