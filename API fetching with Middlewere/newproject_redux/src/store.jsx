import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/dataReducers';

const allREducers = combineReducers({fetch:rootReducer})


const store = createStore(allREducers, applyMiddleware(thunk));
export default store;
