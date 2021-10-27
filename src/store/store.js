import { combineReducers, createStore } from 'redux'
import PostReducer from '../reducer/PostReducer'
import LinkReducer from '../reducer/LinkReducer';

const store = createStore(
    combineReducers({
        PostReducer,
        LinkReducer
    })
);

export default store;