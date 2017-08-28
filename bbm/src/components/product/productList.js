import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';

import ProductCard from './productCard';
import AddProduct from './addProduct';
import { fetchProduct } from '../../actions';
import { filterProducts } from '../../selector';

const style = {
  ListProduct: {
    margin: '20px 50px',
  },
  ProductCard: {
    margin: 25,
    width: '20%',
  },
};

class ListProduct extends Component {
  componentDidMount() {
    // this.props.fetchProduct();
  }
  render() {
    return (
      <div style={style.ListProduct}>
        <Card.Group >
          {this.props.products.map(product => (
            <div key={product.id} style={style.ProductCard} >
              <ProductCard product={product} />
            </div>
          ))}
        </Card.Group>
        <AddProduct />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  products: filterProducts(state.products, state.keyword),
  // products: state.products,
});
const mapDispatchToProps = dispatch => ({
  fetchProduct: () => dispatch(fetchProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
