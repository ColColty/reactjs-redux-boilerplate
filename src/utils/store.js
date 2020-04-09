import { createStore } from 'redux';
import reducers from 'reducers';

const defaultState = {};

export default function configureStore(state = defaultState) {
    return createStore(reducers, state);
}