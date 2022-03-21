import { takeEvery, call, put } from "redux-saga/effects";
import { getInitialPokemon } from "./api";
import {
    fetchInitialPokemonList,
    fetchInitialPokemonListSuccess,
    fetchInitialPokemonListError
} from "./pokedexSlice";


function* fetchInitialPokemonListHandler() {
    try {
        const initialPokemonList = yield call(getInitialPokemon)
        yield put(fetchInitialPokemonListSuccess(initialPokemonList))
    } catch (error) {
        yield put(fetchInitialPokemonListError());
    }
}

export function* watchFetchInitialPokemonList() {
    yield takeEvery(fetchInitialPokemonList.type, fetchInitialPokemonListHandler);
}