
import { FETCH_PRODUCT, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../actions/constants';

const initstate = [
  { "id": 1, "name": "premium", "price": "6000" , "stock":"5000" },
  { "id": 2, "name": "pertralite", "price": "7000" , "stock":"5000" },
];

//  load data from server
const fetchDataProcess = (payloads) => {
  const products = payloads.map((payload) => {
    return {
      name: payload.name,
      imageurl: payload.imageurl,
      price: payload.price,
      id: payload.id,
    };
  });
  return products;
};

//  add new product
const addProduct = (state, payloadProduct) => {
  const ids = state.map(product => product.id);
  const newId = Math.max(...ids) + 1;
  const newProduct = {
    id: newId,
    name: payloadProduct.name,
    stock: payloadProduct.stock,
    description: payloadProduct.description,
    price: payloadProduct.price,
  };
  const newstate = [...state, newProduct];
  return newstate;
};

// delete Product
const deleteProduct = (state, id) => {
  const newstate = state.filter(product => product.id !== id);
  return newstate;
};

// update product
const updateProduct = (state, newproduct) => {
//  console.log(newproduct);
  const newstate = state.map(product => {
    if (product.id === newproduct.id) {
      return { ...product,
        name: newproduct.name,
        stock: newproduct.stock,
        description: newproduct.description,
        price: newproduct.price };
    }
    return product;
  });
  return newstate
};

const ProductReducer = (state = initstate, action) => {
  switch (action.type) {
    case FETCH_PRODUCT : {
      const newstate = fetchDataProcess(action.payload);
      return newstate;
    }
    case ADD_PRODUCT : return addProduct(state, action.payload);
    case DELETE_PRODUCT :return deleteProduct(state, action.payload);
    case UPDATE_PRODUCT : return updateProduct(state, action.payload);
    default: return state;
  }
};


export default ProductReducer;
