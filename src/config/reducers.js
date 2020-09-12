import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import todo from '../modules/todo/reducer';

const reducer = combineReducers({
    todo,
    routing: routerReducer,
});

export default reducer;
