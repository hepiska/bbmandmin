import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import DeleteProduct from './deleteProduct';
import EditProduct from './editproduct';

const style = {
};

const ProductCard = (props) => {
  const { product } = props
  return (
    <div style={style.ListProduct}>
      <Card fluid >
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>harga: Rp{product.price}</Card.Meta>
          <Card.Meta>stock: {product.stock} liter</Card.Meta>
          <Card.Description>{product.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui buttons">
            <EditProduct product= {product} />
            <DeleteProduct id={product.id}/>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProductCard;
