import { SEARCH_PRODUCT } from '../actions/constants';

const SearchReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_PRODUCT: return action.payload;
    default: return state;
  }
};

export default SearchReducer;
