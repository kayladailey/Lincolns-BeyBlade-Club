import kenzieReducer from './counter';
import lincolnReducer from './counterL';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: kenzieReducer,
    counterL: lincolnReducer,
    logged: loggedReducer
});

export default allReducers;