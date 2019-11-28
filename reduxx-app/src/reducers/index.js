import kenzieReducer from './counter';
import lincolnReducer from './counterL';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';
import dadReducer from './counterD';
import momReducer from './counterM';

const allReducers = combineReducers({
    counter: kenzieReducer,
    counterL: lincolnReducer,
    counterDad: dadReducer,
    counterMom: momReducer,
    logged: loggedReducer
});

export default allReducers;