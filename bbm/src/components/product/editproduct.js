import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Icon, Modal, Form } from 'semantic-ui-react';
import { updateProduct } from '../../actions';

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      modalOpen: false
    }
  }
  updateProduct (product ) {
   this.props.updateProduct(product)
   this.closeModal()
  }
  openModal() {
    this.setState({ modalOpen: true });
  }
  closeModal() {
    this.setState({ modalOpen: false });
  }
  handleChange(e) {
    const newProduct = this.state.product;
    newProduct[e.target.name] = e.target.value;
    this.setState({ products: newProduct });
  }
  render() {
    return (
      <div>
        <Button basic color="green" onClick={() => this.openModal()}>Edit</Button>
         <Modal open={this.state.modalOpen}>
           <Modal.Header>Add Product</Modal.Header>
           <Modal.Content>
             <Form>
               <Form.Field>
                 <label>Name {this.state.product.name}</label>
                 <Input
                   focus
                   fluid placeholder="Name"
                   value={this.state.product.name}
                   name="name"
                   onChange={(e) => this.handleChange(e)}
                 />
               </Form.Field>
               <Form.Field>
                 <label>Stock</label>
                  <Input
                   focus
                   fluid placeholder="Stock"
                   value={this.state.product.stock}
                   onChange={(e) => this.handleChange(e)}
                   name="stock"
                 />
               </Form.Field>
              <Form.Field>
              <label>Price </label>
                <Input
                  focus
                  fluid placeholder="Price"
                  value={this.state.product.price}
                  onChange={(e) => this.handleChange(e)}
                  name="price"
                />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <Input
                  focus
                  fluid placeholder="Description"
                  onChange={(e) => this.handleChange(e)}
                  value={this.state.product.description}
                  name="description"
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" onClick={() => this.closeModal()}>
              cancel <Icon name="cancel" />
            </Button>
            <Button primary
              onClick={() => this.updateProduct(this.state.product)}
              >
              Submit <Icon name="right chevron" />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateProduct: product => dispatch(updateProduct(product))
});

export default connect(null, mapDispatchToProps)(EditProduct);
