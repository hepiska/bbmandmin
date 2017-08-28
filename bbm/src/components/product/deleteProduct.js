import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { deleteProduct } from '../../actions';

class DELETE_PRODUCT extends Component{
  render() {
    return (
      <Button basic color="red"
        onClick={() => this.props.deleteProduct(this.props.id)}
      >
        Delete
      </Button>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  deleteProduct : id => dispatch(deleteProduct(id))
})

export default connect (null,mapDispatchToProps)(DELETE_PRODUCT);
