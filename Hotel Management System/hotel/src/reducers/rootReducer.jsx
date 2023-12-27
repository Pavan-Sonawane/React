import { combineReducers } from 'redux';
import reservationReducer from './reservationReducer';

const rootReducer = combineReducers({
  products: reservationReducer,

  
});

export default rootReducer;
