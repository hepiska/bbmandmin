import { combineReducers } from 'redux';

import ProductReducer from './productReducer';
import SearchReducer from './searchReducer';

const RootReducer = combineReducers({
  products: ProductReducer,
  keyword: SearchReducer,
});

export default RootReducer;
