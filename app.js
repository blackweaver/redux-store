const createStore = require("redux").createStore;
const combineReducers = require('redux').combineReducers;


// Actions
const BUY_POKEMON = 'BUY_POKEMON';
const RETURN_POKEMON = 'RETURN_POKEMON';
const buy_pokemon_action = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant,
    }
}
const return_pokemon_action = (cant) => {
    return {
        type: RETURN_POKEMON,
        payload: cant,
    }
}
const BUY_PS5 = 'BUY_PS5';
const RETURN_PS5 = 'RETURN_PS5';
const buy_ps5_action = (cant) => {
    return {
        type: BUY_PS5,
        payload: cant,
    }
}
const return_ps5_action = (cant) => {
    return {
        type: RETURN_PS5,
        payload: cant,
    }
}

// Reducers
const default_games_state = {
    pokemon: 10,
    yoshi: 10
}
const default_consoles_state = {
    ps5: 10,
    switch: 10
}

const games_reducer = (state = default_games_state, action) => {
    switch (action.type) {
        case BUY_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            }
        }
        case RETURN_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }
        }
        default: return state;
    }
}
const consoles_reducer = (state = default_consoles_state, action) => {
    switch (action.type) {
        case BUY_PS5: {
            return {
                ...state,
                ps5: state.ps5 - action.payload
            }
        }
        case RETURN_PS5: {
            return {
                ...state,
                ps5: state.ps5 + action.payload
            }
        }
        default: return state;
    }
}

const rootReducers = combineReducers({
    games_reducer,
    consoles_reducer
})

// Store
const store = createStore(rootReducers);
console.log('Estado inicial: ', store.getState());
store.subscribe(() => {
    console.log('Cambio de estado: ', store.getState())
});
store.dispatch(buy_pokemon_action(3));
store.dispatch(return_pokemon_action(2));

store.dispatch(buy_ps5_action(5));
store.dispatch(return_ps5_action(3));