import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducer from './reducers';
import {Provider} from 'react-redux';

const store = createStore(allReducer); //  (combineReducer)Can not pas more than 1 reducer. Need to use combinereducers or use teh allReducer option I did for this project


ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
    document.getElementById('root'));

