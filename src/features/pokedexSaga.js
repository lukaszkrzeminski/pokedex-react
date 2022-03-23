import { takeLatest, call, put } from "redux-saga/effects";
import { getInitialPokemon } from "./api";
import {
    fetchInitialPokemonData,
    fetchInitialPokemonDataSuccess,
    fetchInitialPokemonDataError,
} from "./pokedexSlice";


function* fetchInitialPokemonDataHandler() {
    try {
        const initialPokemonData = yield call(getInitialPokemon)
        yield put(fetchInitialPokemonDataSuccess(initialPokemonData))
    } catch (error) {
        yield put(fetchInitialPokemonDataError());
    }
}

export function* watchFetchInitialPokemonList() {
    yield takeLatest(fetchInitialPokemonData.type, fetchInitialPokemonDataHandler);
}